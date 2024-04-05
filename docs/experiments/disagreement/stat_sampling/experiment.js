Qualtrics.SurveyEngine.addOnload(function () {
    // Retrieve Qualtrics object and save in qthis
    var qthis = this;

    // Hide button
    qthis.hideNextButton();

    /* Defining and load required resources */
    var jslib_url = "https://keremoktar.github.io";

    // the below urls must be accessible with your browser
    var requiredResources = [
		jslib_url + "/disagreement_statsampling/issues.js", 
        jslib_url + "/jspsych6.3/jspsych.js",
        jslib_url + "/jspsych6.3/plugins/jspsych-html-keyboard-response.js",
		jslib_url + "/jspsych6.3/plugins/jspsych-survey-multi-choice.js",
		jslib_url + "/jspsych6.3/plugins/jspsych-survey-multi-select.js",
		jslib_url + "/jspsych6.3/plugins/jspsych-html-slider-response.js",
		jslib_url + "/jspsych6.3/plugins/jspsych-html-button-response.js",
		jslib_url + "/jspsych6.3/plugins/jspsych-survey-likert.js",
		jslib_url + "/jspsych6.3/plugins/jspsych-instructions.js"
    ];

	// load the scripts
    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp(); //this loads the study
            }
        });
    }

	// exclude mobile
    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }

    /* Appending the display_stage Div using jQuery */
	// display stage is the thing that jspsych is displayed on; white background blocks out text under
    // jQuery is loaded in Qualtrics by default
    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');


    /* Wrap jsPsych.init() in a function */
	//you put it in a function to make it easier to call 
	// so the jspsych survey is only called once the packages are loaded
    function initExp() {
		
		var timeline = [ ]; //initialize timeline
		
		var all_domains = ["Moral", "Politics", "Religion", "Science"]; 
    	var cond = Math.floor(Math.random() * 4);
    	var domain = all_domains[cond]; 
		
		var blockRepetitionCount = 0;
		
		jsPsych.data.addProperties({
		  domain: domain // pick a random domain and log it
		}) //this gets logged to ED (embedded data) later

		//console.log(stimuli); //this is if you want to look at all the imported data
		
		// filter the items by domain
		// stimuli can be called here bc the disagreement item list is already imported 
		// and it is loaded into a json array called stimuli!
		var subj_stimuli = stimuli.filter(function(item) {
		  return item["Domain"] === domain;
		});
		//console.log(subj_stimuli); //for troubleshooting [ts]
		
		// this tracks which specific item was randomly picked
		var agreement_levels = [
		  { disagreement_lvl: 'low', selected_item: "None" },
		  { disagreement_lvl: 'medium', selected_item: "None" },
		  { disagreement_lvl: 'high', selected_item: "None" }
		];
		
		//////////////////////////////////////
		//    Belief Selection Trial        //
		//////////////////////////////////////

		var agreement_selexn_trial = {
		  type: "survey-multi-select",
		  on_start: function(){
		    //console.log(subj_stimuli); //for [ts]
		  },
		  questions: [
		  {
			prompt: "Which of the following statements do you agree with? You may select multiple statements or none.<br><br>", 
			options: function(){
						//filtering by disagreement level
						current_stimuli = subj_stimuli.filter(function(item) {
											return item["Disagreement Level"] === jsPsych.timelineVariable('disagreement_lvl'); 
										  }); //dis lvl is randomized below, in the timeline construction
						
										  // log disagreement level
						Qualtrics.SurveyEngine.setEmbeddedData("lvl" + (blockRepetitionCount + 1).toString(),jsPsych.timelineVariable('disagreement_lvl')); 
						console.log("current stim disagreement level:", jsPsych.timelineVariable('disagreement_lvl'))
						console.log("current stim: ", current_stimuli)
						
						//randomizing order of presentation
						for (let i = current_stimuli.length - 1; i > 0; i--) {
						  const j = Math.floor(Math.random() * (i + 1));
						  [current_stimuli[i], current_stimuli[j]] = [current_stimuli[j], current_stimuli[i]];
						}
						//extracting only the item string from the data and returning the full array to populate "options"
						// map applies a fxn to each element in an array
						// so this returns only the item text as the options
						return current_stimuli.map(function(item) {return item.Item;})
					  },
			required: false,
			name: 'Agreement Selection Trial' //name of the question
		  }],
			on_finish: function(data) { //storing information about subj response to give feedback in next trial
			  var agreed_items = data.response['Agreement Selection Trial']
			  var num_agreed = agreed_items.length
			  if (num_agreed > 0) { //pick one of the chosen items at random
				var random_ind = Math.floor(Math.random() * agreed_items.length); //random 0-1 * length => random choice
				data.selected_item = agreed_items[random_ind]
				 
				//log item into qualtrics embedded data
				Qualtrics.SurveyEngine.setEmbeddedData("item" + (blockRepetitionCount + 1).toString(), data.selected_item);
				
				//now get corresponding item data from stimulus list to put in additional info
				  var chosen_item = stimuli.filter(function(item) {
					  return item["Item"] === data.selected_item;
					});
				console.log("CHOSEN ITEM:", chosen_item);
				console.log("CHOSEN ISSUE:", chosen_item[0]["Issue"]);
				console.log("CHOSEN AGREE:", chosen_item[0]["Agree"]);
				Qualtrics.SurveyEngine.setEmbeddedData("issue" + (blockRepetitionCount + 1).toString(), chosen_item[0]["Issue"]); 
				//since we say 'don't share your view,' in the question dv, we can just invert the agreement rather than piping disagreement
				Qualtrics.SurveyEngine.setEmbeddedData("dis" + (blockRepetitionCount + 1).toString(), 100-chosen_item[0]["Agree"]); 
				
				// this just logs all the beliefs that were chosen
				var chosen_items = stimuli.filter(function(item) {
				  return agreed_items.includes(item["Item"]);
				});
				 var chosen_item_labs = chosen_items.map(function(item) {
					 return item["Issue"];
					});
				Qualtrics.SurveyEngine.setEmbeddedData("bels" + (blockRepetitionCount + 1).toString(), chosen_item_labs.toString());
				
				//increment item count so that when it loops back you log new variables into data
				blockRepetitionCount++;
				  
			  } else {
				console.log("No response selected, skipping to next round")
				data.selected_item = "None"
				//jsPsych.endCurrentTimeline()
			  }
			  	//Qualtrics.SurveyEngine.setEmbeddedData("item1", data.selected_item);
			}
		};
		
		//////////////////////////////////////
		//    Belief Strength  Trial  1     //
		//////////////////////////////////////

		var belief_scale = [
		'Definitely True', 
		'Very likely<br>to be True',  
		'Likely to be True',  
		'Slightly likely<br>to be True',  
		'Slightly likely<br>to be False',  
		'Likely to be False',  
		'Very likely<br>to be False',  
		'Definitely False'
		];

		var belief_true = [
			'Definitely True', 
			'Very likely to be True',  
			'Likely to be True',  
			'Slightly likely to be True'
		];

		var strength_trial_1 = {
		  type: 'survey-likert',
		  preamble:   function(data){
			stim_html = 
				"You selected that you agreed with the following claim: <i><br>" + 
                jsPsych.data.get().last(1).select('selected_item').values[0] + 
                "</i>"
			return stim_html
		  },
		  questions: [
			{prompt: "<b>I believe that this statement is... </b>", 
			name: 'strength1', labels: belief_scale.reverse(), required: true,}
		  ],
		  name: 'strength1',
		  data: function(){
				return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
			  },
		  on_finish: function(data) {
			var resp = data.response['strength1']
			  data.strength1 = resp
			  Qualtrics.SurveyEngine.setEmbeddedData("strength1_" + (blockRepetitionCount).toString(), data.strength1);
		  } 
		};

		//////////////////////////////////////
		//             Confidence Trial  1  //
		//////////////////////////////////////

		var confidence_scale = [
			"Very confident", 
			"Moderately confident", 
			"Somewhat confident", 
			"Only slightly confident", 
			"Not at all confident"
		];

		var confidence_trial_1 = {
		  type: 'survey-likert',
		  preamble:   function(data){
			stim_html = 
				"You selected that you agreed with the following claim: <i><br>" + 
                jsPsych.data.get().last(1).select('selected_item').values[0] + 
                "</i>"
			return stim_html
		  },
		  questions: [
			{prompt: "<b>How confident are you in this response?</b>", 
			name: 'confidence1', labels: confidence_scale.reverse(), required: true,}
		  ],
		  name: 'confidence1',
		  data: function(){
				return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
			  },
		  on_finish: function(data) {
			var resp = data.response['confidence1']
			  data.confidence = resp
			  Qualtrics.SurveyEngine.setEmbeddedData("conf1_" + (blockRepetitionCount).toString(), data.confidence);
		  } 
		};

		//////////////////////////////////////
		//    Agreement Estimation Trial    //
		//////////////////////////////////////

		var agreement_estim_trial = {
		  type: "html-slider-response",
		  stimulus: function(data){
			stim_html = "Let's continue considering the claim that <i>" +
				jsPsych.data.get().last(1).select('selected_item').values[0] +
				".</i><br><br> You indicated that the statement above is more likely to be <i>";

				//depends the person's belief strength response
				console.log('Belief Strength Value', jsPsych.data.get().last(2).select('strength1').values[0]);
				if (jsPsych.data.get().last(2).select('strength1').values[0] > 4) {
				stim_html += 'true than false.';
				} else {
				stim_html += 'false than true.';
				}
				stim_html += "</i><br><br> What percentage of people in the United States do you think <b>share your view</b> about this claim? Please drag the bar to indicate a percentage. <br><br>";

			return stim_html;
		  },
		  data: function(){
			return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
		  },
		  labels: ["0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"],
		  button_label: "Continue",
		  require_movement: true,
			name: 'share',
		on_finish: function(data) {
			var resp = data.response
			  data.share = resp
			Qualtrics.SurveyEngine.setEmbeddedData("share" + (blockRepetitionCount).toString(), data.share);
    } 
		}
		
		//////////////////////////////////
		//     Question Views Trial     //
		//////////////////////////////////

		var question_views_trial = {
		  type: "html-button-response",
		  stimulus: function(data){
			var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0];
			var last_response = jsPsych.data.get().last(1).values()[0].response;
			var selected_item_data = subj_stimuli.filter(function(item) {
			  return item["Item"] === selected_item;
			})[0];
			console.log("selected statement: ", selected_item)
			console.log("pop agreement: ", last_response)
			console.log("all data on item: ", selected_item_data)
			var stim_html = "You previously indicated believing that " +
			  last_response + "% of the U.S. shares your view about the following claim: " +
			  selected_item + "<br><br> In fact, according to a recent public opinion poll, " +
			  "the actual percentage of those who share your view is " + selected_item_data['Agree'] +
			  "%, whereas <b>" + (100 - selected_item_data['Agree']) + "% of Americans do not share your view</b>.*" +
			  "<br><br> Does the fact that " + (100 - selected_item_data['Agree']) + "% of the U.S. does not share your view" +
			  " <b>make you question your own view?</b><br><br>" +
			  "<SPAN STYLE='font-size:70%'>* This data is from a nationally representative poll of Americans conducted" +
			  " by a major polling organization. Source: " + selected_item_data['apa2'] + "</a><br><br></SPAN>";
			return stim_html;
		  },
		  choices: ["Yes, this makes me question my view.", "No, this does not make me question my view."],
		  name: 'question',
		    data: function(){
			return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
		  },
		required: true,
			on_finish: function(data) {
				var resp = data.response
				  data.question = (1 - resp)
				Qualtrics.SurveyEngine.setEmbeddedData("question" + (blockRepetitionCount).toString(), data.question);
		} 
		};

		//////////////////////////////////////
		//    Belief Strength  Trial  2     //
		//////////////////////////////////////

			var strength_trial_2 = {
			  type: 'survey-likert',
			  preamble:   function(data){
				stim_html = 
					"You selected that you agreed with the following claim: <i><br>" + 
					jsPsych.data.get().last(1).select('selected_item').values[0] + 
					"</i>"
				return stim_html
			  },
			  questions: [
				{prompt: "<b>I believe that this statement is... </b>", 
				name: 'strength2', labels: belief_scale, required: true,}
			  ],
			  name: 'strength2',
			  data: function(){
					return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
				  },
			  on_finish: function(data) {
				var resp = data.response['strength2']
				  data.strength1 = resp
				  Qualtrics.SurveyEngine.setEmbeddedData("strength2_" + (blockRepetitionCount).toString(), data.strength1);
			  } 
			};
	
			//////////////////////////////////////
			//             Confidence Trial  2  //
			//////////////////////////////////////
	
			var confidence_trial_2 = {
			  type: 'survey-likert',
			  preamble:   function(data){
				stim_html = 
					"You selected that you agreed with the following claim: <i><br>" + 
					jsPsych.data.get().last(1).select('selected_item').values[0] + 
					"</i>"
				return stim_html
			  },
			  questions: [
				{prompt: "<b>How confident are you in this response?</b>", 
				name: 'confidence', labels: confidence_scale, required: true,}
			  ],
			  name: 'confidence',
			  data: function(){
					return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
				  },
			  on_finish: function(data) {
				var resp = data.response['confidence']
				  data.confidence = resp
				  Qualtrics.SurveyEngine.setEmbeddedData("conf" + (blockRepetitionCount).toString(), data.confidence);
			  } 
			};
		
		var mapping_trial = {
		  type: "html-button-response",
		  stimulus: function(data){
			console.log(jsPsych.data.get());
			var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0];
			var last_response = jsPsych.data.get().last(2).values()[0].response;
			var selected_item_data = subj_stimuli.filter(function(item) {
			  return item["Item"] === selected_item;
			})[0];
			var stim_html = "You previously indicated believing that " +
			  last_response + "% of the U.S. shares your view about the following claim: " +
			  selected_item + "<br><br>You then learned that <b>" + (100 - selected_item_data['Agree']) + "% of Americans do not share your view on this issue</b>. " +
			  "Which of the following best describes your reaction to the disagreement? <br><br> Learning about the disagreement… <br><br>";
			return stim_html;
		  },
		  choices: function(){
			var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0];
			var resp_array = ["...<b>does not change</b> my opinion on this issue.", 
			  "...makes me <b>neutral</b> about this issue and I prefer to remain so until I obtain further evidence.</b>",
		  	  "...brought me <b>closer</b>  to the disagreeing group's view on this issue.",
			  "...pushed me further <b>away</b>  from the disagreeing group's view on this issue."];
			  var shuffledArray = jsPsych.randomization.shuffle(resp_array); // Shuffle the array
   			 return shuffledArray
		  },
			margin_horizontal: '150px',
			margin_vertical: '10px',
		  name: 'map',
		save_trial_parameters: {
			// save the randomly-selected button order to the trial data
			choices: true
		  },
		required: true,
			on_finish: function(data) {
				var resp = data.response;
				console.log(resp);
				console.log(data.choices);
				console.log(data.choices[resp]);
				Qualtrics.SurveyEngine.setEmbeddedData("map" + (blockRepetitionCount).toString(), data.choices[resp]);
		} 
		};
		///////////////////////////////////
		//     PTP Questions            //
		///////////////////////////////////

		var likert_scale = [
		  "Strongly Disagree", 
		  "Disagree", 
		  "Somewhat Disagree",
		  "Neither Agree Nor Disagree", 
		  "Somewhat Agree",
		  "Agree", 
		  "Strongly Agree"
		];

		var ptp_agree_trial = {
		  type: 'survey-likert',
		  preamble:   function(data){
			//console.log("likert_dat_1:", jsPsych.data.get().last(1).select('selected_item').values[0]);
			var selected_item = jsPsych.data.get().last(3).select('selected_item').values[0];
			stim_html = 
				"Remember that we are considering the following issue:<br>" + selected_item + ".<br><br> Please " +
				"indicate how much <b>you agree or disagree </b>with the following statements about this issue:<br><br>" +
			"<hr style='border-top: dotted 1px;' />"
			return stim_html
		  },
		  questions: [
			{prompt: "People who disagree with me on this issue are less informed than I am or are worse at evaluating relevant evidence.", 
			name: 'ep', labels: likert_scale,required: true},
			{prompt: "This issue is currently unknowable or more a matter of opinion than fact; others' opinions are therefore uninformative about the truth of the issue.", 
			name: 'me', labels: likert_scale, required: true},
			{prompt: "Changing my view about this issue could damage my relationships with important people in my life, or challenge how I think of myself as a person.", 
			name: 'ne', labels: likert_scale, required: true},
		  ],
		  randomize_question_order: true,
		  required: true,
		  name: 'ptp_agree',
		  on_finish: function(data) {
			Qualtrics.SurveyEngine.setEmbeddedData("ep_a" + (blockRepetitionCount).toString(), data.response['ep']);
			Qualtrics.SurveyEngine.setEmbeddedData("me_a" + (blockRepetitionCount).toString(), data.response['me']);
			Qualtrics.SurveyEngine.setEmbeddedData("ne_a" + (blockRepetitionCount).toString(), data.response['ne']);
		  } 
		};
		
		var agree_inst = {
			type: 'instructions',
			pages: ["Important note: You are about to encounter a <b>different</b> question about the same statements. " +
					"You previously rated how much you agreed with three statements. In the next question, you will rate how well they " +
					"explain your behavior.",
					"<b>Your answers to the agreement and explanation questions may be similar or different. </b>For example, " +
					"you may strongly agree that this survey is in English. However, the survey being English may not explain " +
					"why you are taking it (you are likely taking the survey instead because it is paid)."
				   ],
			show_clickable_nav: true
		};

		var explain_scale = [
		  "Does Not Explain At All", 
		  "Explains Slightly", 
		  "Explains Somewhat Well", 
		  "Explains Well",
		  "Explains Very Well",
		  "Explains Entirely"
		];

		var ptp_explain_trial = {
		  type: 'survey-likert',
		  preamble:   function(data){
			var selected_item = jsPsych.data.get().last(4).select('selected_item').values[0];
			var question_response = jsPsych.data.get().last(3).values()[0].response;
			var questioned_1;
			var questioned_2;
			if (question_response === 0){
			  questioned_1 = 'questioned';
			  questioned_2 = ' because many Americans disagree with you. '} 
			  else {
				questioned_1 = 'did not question';
				questioned_2 = ', despite many Americans disagreeing with you. '
			  };
			stim_html = '\
			Remember that we are considering the following issue: <br>' + selected_item + '.<br><br>\
			You previously indicated that you <i>' + questioned_1 + '</i> your view about this issue' + questioned_2 + '\
			Now, take a moment to <b>reflect on <i>why</i> you ' + questioned_1 + ' your view,</b> and consider the statements you just rated as potential <i>explanations</i>.<br><br>\
			Please indicate how well <b>these statements <i>explain why </i>you ' + questioned_1 + ' your view</b>.\
			They may be excellent explanations, or entirely inadequate.<br><br><hr style="border-top: dotted 1px;" />\
			';
			return stim_html;
		  },
		  questions: [
			{prompt: "People who disagree with me on this issue are less informed than I am or are worse at evaluating relevant evidence.", 
			name: 'ep', labels: explain_scale, required: true},
			{prompt: "This issue is currently unknowable or more a matter of opinion than fact; others' opinions are therefore uninformative about the truth of the issue.", 
			name: 'me', labels: explain_scale, required: true},
			{prompt: "Changing my view about this issue could damage my relationships with important people in my life, or challenge how I think of myself as a person.", 
			name: 'ne', labels: explain_scale, required: true},
		  ],
		  randomize_question_order: true,
		  name: 'ptp_explain',
		  on_finish: function(data) {
			Qualtrics.SurveyEngine.setEmbeddedData("ep_e" + (blockRepetitionCount).toString(), data.response['ep']);
			Qualtrics.SurveyEngine.setEmbeddedData("me_e" + (blockRepetitionCount).toString(), data.response['me']);
			Qualtrics.SurveyEngine.setEmbeddedData("ne_e" + (blockRepetitionCount).toString(), data.response['ne']);
		  } 
		};

		// this loads up other measures *if* the participant selected a belief in the prior trial
		var if_selection = {
			timeline: [strength_trial_1, confidence_trial_1, 
					   agreement_estim_trial,question_views_trial, 
					   strength_trial_2, confidence_trial_2, 
					   mapping_trial,ptp_agree_trial], // load on measures here
			conditional_function: function(){
				// get the data from the previous trial,
				// and check if there was a selection
				var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0]
				if (selected_item === "None") {
				  return false;
				} else {
				  return true;
				}
			}
		};

		var dv_block = {
		  timeline: [agreement_selexn_trial, if_selection], //will only run if_selection if participant chose a statement to agree with
		  timeline_variables: agreement_levels, //randomly chooses a disagreement level to display on the belief trial
		  randomize_order: true
		};
		
		timeline.push(dv_block);
		
        jsPsych.init({
            timeline: timeline,
            display_element: 'display_stage',

            /* Change 6: Adding the clean up and continue functions.*/
            on_finish: function (data) {
				
				// select all trials
				var all_data = jsPsych.data.get().json();

				// get csv representation of data and log to console
				//console.log(all_data.csv());
				
				Qualtrics.SurveyEngine.setEmbeddedData("domain", domain);
				Qualtrics.SurveyEngine.setEmbeddedData("alldat", all_data);
				
                // clear the stage
                jQuery('#display_stage').remove();
                jQuery('#display_stage_background').remove();

                // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
                qthis.clickNextButton();
            }
        });
    }
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});