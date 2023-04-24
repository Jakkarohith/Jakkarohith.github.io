function getBotResponse(input) {
    let welcomeGreetings = ["hi", "hello", "hey", "hai"];
    let exitGreetings = ["bye", "goodbye", "takecare", "see you"];
    let isQnIamGood = isQuestionIamGood(input)
    let isQnWhatCanyoudo = isQuestionWhatcando(input)
    let isQnHowAreYouDoing = isQuestionHowAreYouDoing(input)
    if (isQnIamGood) {
        let responseHtml = `<p class="botText">
         <span>Good to hear.</span>
         </p>`;
        $("#chatbox").append(responseHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        return
    } else if (isQnHowAreYouDoing) {
        let responseHtml = `<p class="botText">
         <span>I am good.</span>
         </p>`;
        $("#chatbox").append(responseHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        return
    } else if (isQnWhatCanyoudo) {
        let responseHtml = `<p class="botText">
                            <span>I can get you any information regarding Indian Preimer league like</span>
                            <span>1. Who owns the team ?</span>
                            <span>2. Who is the captian of the team ?</span>
                            <span>3. Highest number of fours?</span>
                            <span>Many more..</span>
                            </p>`;
        $("#chatbox").append(responseHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        return
    }
    // Simple responses
    if (welcomeGreetings.includes(input) == true) {
        let responseHtml = '<p class="botText"><span>' + "Hello there!" + '</span></p>';
        $("#chatbox").append(responseHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        return
    } else if (exitGreetings.includes(input) == true) {
        let responseHtml = '<p class="botText"><span>' + "Talk to you later!" + '</span></p>';
        $("#chatbox").append(responseHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        return
    } else {
        const stopwords = ["of", "the", "a", "an", "any", "is", "can", "are", "there", "any", "who", "what", "why", "whom", "spoken", "used", "in", "people", "speak"];
        let editor = "sorts\n" +
            "#iplteams = {rcb,csk,mi,kkr,gt,dc,srh,pk,rr,lsg}.\n" +
            "#iplteamnames = {royal_challengers_banglore,chennai_super_kings,mumbai_indians,kolkata_knight_riders,gujarat_titans,delhi_capitals,sunrisers_hyderabad,punjab_kings,rajasthan_royals,lucknow_super_gaints}.\n" +
            "#captains = {m_s_dhoni,faf_du_plessis,rohit_sharma,shreyas_iyer,hardik_pandaya,rishab_pant,aiden_makaram,shikhar_dhawan,sanju_samson,k_l_rahul}.\n" +
            "#trophies = {0,1,2,3,4,5,6,7,8,9}.\n" +
            "#misc = {virat_kholi,amit_mishra,shikar_dhawan,chris_gayle,david_warner,andre_russell}.\n" +
            "#centuries = {centuries}.\n" +
            "#highestscore = {highestscore}.\n" +
            "#highestnofours = {highestnofours}.\n" +
            "#highestnosixes = {highestnosixes}.\n" +
            "#highestfifties = {highestfifties}.\n" +
            "#highestwicketstaker = {highestwickets}.\n" +
            "#higheststrikerate = {higheststrikerate}.\n" +
            "#coachname = {brain_lara,mark_boucher,trevor_bayless,kumar_sangakara,sanjay_bangar,stephen_flemming,ricky_ponting,ashish_nehra,chandrakant_pandit,andy_flower}.\n" +
            "#ownername = {royal_challengers_sports_pvt_ltd,chennai_super_kings_cricket_ltd,indiawin_sports_pvt_ltd,knight_riders_sports_pvt_ltd,cvc_captial_partners,grm_sports_private_ltd,sun_tv_network,kph_dream_cricket_private_ltd,the_royal_sports_group,rpsg_groups}.\n" +
            "predicates\n" +
            "iplnames(#iplteams,#iplteamnames).\n" +
            "iplcaptains(#captains,#iplteams).\n" +
            "numberoftrophies(#trophies,#iplteams).\n" +
            "franchiseowner(#ownername,#iplteams).\n" +
            "highestteamscore(#iplteams).\n" +
            "highestcenturies(#misc).\n" +
            "highestnumoffour(#misc).\n" +
            "highestnumofsixes(#misc).\n" +
            "highestnumoffifties(#misc).\n" +
            "higheststrikerateever(#misc).\n" +
            "highestindividualwickets(#misc).\n" +
            "coachname(#coachname,#iplteams).\n" +
            "rules\n" +
            "iplnames(rcb,royal_challengers_banglore).\n" +
            "iplnames(csk,chennai_super_kings).\n" +
            "iplnames(mi,mumbai_indians).\n" +
            "iplnames(kkr,kolkata_knight_riders).\n" +
            "iplnames(gt,gujarat_titans).\n" +
            "iplnames(dc,delhi_capitals).\n" +
            "iplnames(srh,sunrisers_hyderabad).\n" +
            "iplnames(pk,punjab_kings).\n" +
            "iplnames(rr,rajasthan_royals).\n" +
            "iplnames(lsg,lucknow_super_gaints).\n" +
            "iplcaptains(faf_du_plessis,rcb).\n" +
            "iplcaptains(m_s_dhoni,csk).\n" +
            "iplcaptains(rohit_sharma,mi).\n" +
            "iplcaptains(hardik_pandaya,gt).\n" +
            "iplcaptains(rishab_pant,dc).\n" +
            "iplcaptains(aiden_makaram,srh).\n" +
            "iplcaptains(shikhar_dhawan,pk).\n" +
            "iplcaptains(sanju_samson,rr).\n" +
            "iplcaptains(k_l_rahul,lsg).\n" +
            "iplcaptains(shreyas_iyer,kkr).\n" +
            "numberoftrophies(0,rcb).\n" +
            "numberoftrophies(5,mi).\n" +
            "numberoftrophies(2,kkr).\n" +
            "numberoftrophies(4,csk).\n" +
            "numberoftrophies(2,srh).\n" +
            "numberoftrophies(1,rr).\n" +
            "numberoftrophies(0,pk).\n" +
            "numberoftrophies(0,dc).\n" +
            "numberoftrophies(0,lsg).\n" +
            "numberoftrophies(1,gt).\n" +
            "franchiseowner(royal_challengers_sports_pvt_ltd,rcb).\n" +
            "franchiseowner(chennai_super_kings_cricket_ltd,csk).\n" +
            "franchiseowner(indiawin_sports_pvt_ltd,mi).\n" +
            "franchiseowner(knight_riders_sports_pvt_ltd,kkr).\n" +
            "franchiseowner(cvc_captial_partners,gt).\n" +
            "franchiseowner(grm_sports_private_ltd,dc).\n" +
            "franchiseowner(sun_tv_network,srh).\n" +
            "franchiseowner(kph_dream_cricket_private_ltd,pk).\n" +
            "franchiseowner(the_royal_sports_group,rr).\n" +
            "franchiseowner(rpsg_groups,lsg).\n" +
            "coachname(sanjay_bangar,rcb).\n" +
            "coachname(stephen_flemming,csk).\n" +
            "coachname(mark_boucher,mi).\n" +
            "coachname(chandrakant_pandit,kkr).\n" +
            "coachname(ashish_nehra,gt).\n" +
            "coachname(ricky_ponting,dc).\n" +
            "coachname(brain_lara,srh).\n" +
            "coachname(trevor_bayless,pk).\n" +
            "coachname(kumar_sangakara,rr).\n" +
            "coachname(andy_flower,lsg).\n" +
            "highestcenturies(virat_kholi).\n" +
            "highestteamscore(rcb).\n" +
            "highestindividualwickets(amit_mishra).\n" +
            "highestnumoffour(shikar_dhawan).\n" +
            "highestnumofsixes(chris_gayle).\n" +
            "highestnumoffifties(david_warner).\n" +
            "higheststrikerateever(andre_russell).";

        // sorts
        var contstring = editor.split("sorts\n")[1].split("predicates\n");
        var sortstring = contstring[0].split('.');
        sortstring.splice(-1, 1);
        var sorts = {};
        sortstring = sortstring.map(d => d.replace(/\n/g, '').trim()).forEach(d => {
            var par = d.split("=");
            sorts[par[0].replace(/#/, '').trim()] = par[1].replace(/{|}/g, '').split(',').map(w => w.trim())
        });
        // predicates
        var predicates = {};
        contstring = contstring[1].split("rules\n");
        sortstring = contstring[0].split('.');
        sortstring.splice(-1, 1);
        sortstring.forEach(d => {
            var part = d.replace(/\n/g, '').trim().split('(');
            var func = part[0];
            predicates[func] = {};
            var par = part[1].split(',').map(e => e.replace(/#|\)/g, '').trim());
            var par1 = sorts[par[0]].slice();
            par1.push("X");
            par.splice(0, 1);
            par1.forEach(e => {
                var strinh = (e == 'X' ? '' : (e + ' ')) + func;
                predicates[func][strinh] = func + "(" + e + ")";
                par.forEach(par2 => {
                    var temp = sorts[par2].slice();
                    temp.push("X");
                    temp.forEach(t => {
                        var strinh = (e == 'X' ? '' : (e + ' ')) + func + (t == 'X' ? '' : (' ' + t));
                        // if (strinh != fubnc)
                        predicates[func][strinh] = func + "(" + e + "," + t + ")";
                    })
                });
            });
        });
        var all_predicates = [];
        for (var key1 in predicates) {
            if (predicates.hasOwnProperty(key1)) {
                for (var key2 in predicates[key1]) {
                    if (predicates[key1].hasOwnProperty(key2))
                        all_predicates.push(key2);
                }
            }

        }
        all_predicates.push('speak spanish'); // extra terms
        a = FuzzySet(all_predicates);
        var question = input;
        if (question.trim() === '') {
            return 'Please ask a question.';
        }
        var trim_script = question.split(" ");
        trim_script = trim_script.filter(f => !stopwords.includes(f));
        var queryQues = a.get(trim_script.join(" "), null, 0.5);
        if (queryQues === null) {
            let responseHtml = `<p class="botText"><span>Sorry. I can't answer that right now.Please try different question ?</span></p>`;
            $("#chatbox").append(responseHtml);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }
        getAnswer(queryQues);
        function getAnswer(question) {
            if (question != null) {
                var mainkey = question[0][1].replace('speak ', '');
                var answerarr = mainkey.split(' ');
                var key1 = '';
                answerarr.forEach(d => {
                    key1 = (predicates[d] != undefined) ? d : key1;
                });
                //var key1 = answerarr.length>2? answerarr[1]:answerarr[0];
                var key2 = mainkey;
                console.log(key1 + '-' + key2);
                console.log(predicates[key1][key2]);

                var data = {
                    'action': "getQuery",
                    'query': predicates[key1][key2],
                    'editor': editor
                };
                $.ajax({
                    url: "https://cors-anywhere.herokuapp.com/http://wave.ttu.edu/ajax.php",
                    type: "POST",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    data: {
                        action: "getQuery",
                        query: predicates[key1][key2],
                        editor: editor
                    },
                    success: function (response) {
                        if (response) {
                            const ansStr = convertToReadableForm(response)
                            let responseHtml = '<p class="botText"><span>' + ansStr + '</span></p>';
                            $("#chatbox").append(responseHtml);
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        } else {
                            const answer = 'Sorry, I could not find an answer.';
                            let responseHtml = '<p class="botText"><span>' + answer + '</span></p>';
                            $("#chatbox").append(responseHtml);
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            console.log("test", res);
                        }
                    },
                    error: function (xhr, status, error) {
                        console.log("error: " + error);
                    }
                });
            }
        }
    }
}

function convertToReadableForm(str) {
    let exactAnswer = str.split("=").pop().split('<')[0].replaceAll('_', ' ').trim();
    return exactAnswer.charAt(0).toUpperCase() + exactAnswer.slice(1);
}

function isQuestionWhatcando(str) {
    let whatCanyouDoQuestions = ['whatcanyoudo', 'whatelsecanyoudo']
    let testableStr = str.replace(/[\s?]/g, '');
    return whatCanyouDoQuestions.includes(testableStr)
}

function isQuestionHowAreYouDoing(str) {
    let howAreYouDoingQn = str.replace(/[\s?]/g, '').toLowerCase();
    return 'howareyoudoing' === howAreYouDoingQn
}

function isQuestionIamGood(str) {
    let iamGoodQn = str.replace(/[\s!]/g, '').toLowerCase();
    return 'iamgood' === iamGoodQn
}