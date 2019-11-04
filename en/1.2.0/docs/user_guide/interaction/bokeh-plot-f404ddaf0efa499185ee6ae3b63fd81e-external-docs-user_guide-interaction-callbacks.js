(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("b14fce74-30b9-4bfb-b4a4-e3ae6afa0bf6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b14fce74-30b9-4bfb-b4a4-e3ae6afa0bf6' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c9924176-71a6-4232-b25f-fcb1c01ef0be":{"roots":{"references":[{"attributes":{},"id":"24831","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"24816","type":"Circle"},{"attributes":{"source":{"id":"24820","type":"ColumnDataSource"}},"id":"24825","type":"CDSView"},{"attributes":{"formatter":{"id":"24831","type":"BasicTickFormatter"},"ticker":{"id":"24803","type":"BasicTicker"}},"id":"24802","type":"LinearAxis"},{"attributes":{"js_property_callbacks":{"change:indices":[{"id":"24827","type":"CustomJS"}]}},"id":"24826","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"24837","type":"PolyAnnotation"}},"id":"24812","type":"LassoSelectTool"},{"attributes":{"args":{"s":{"id":"24790","type":"ColumnDataSource"},"s2":{"id":"24820","type":"ColumnDataSource"}},"code":"\\n    const inds = s.selected.indices;\\n    const d = s.data;\\n    var ym = 0\\n\\n    if (inds.length == 0)\\n        return;\\n\\n    for (var i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n        d[&#x27;color&#x27;][i] = \\"navy\\"\\n    }\\n    for (var i = 0; i &lt; inds.length; i++) {\\n        d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n        ym += d[&#x27;y&#x27;][inds[i]]\\n    }\\n\\n    ym /= inds.length\\n    s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n    s.change.emit();\\n    s2.change.emit();\\n"},"id":"24827","type":"CustomJS"},{"attributes":{},"id":"24808","type":"BasicTicker"},{"attributes":{},"id":"24829","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"24808","type":"BasicTicker"}},"id":"24811","type":"Grid"},{"attributes":{},"id":"24834","type":"UnionRenderers"},{"attributes":{},"id":"24835","type":"Selection"},{"attributes":{"formatter":{"id":"24829","type":"BasicTickFormatter"},"ticker":{"id":"24808","type":"BasicTicker"}},"id":"24807","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"24823","type":"Line"},{"attributes":{},"id":"24836","type":"UnionRenderers"},{"attributes":{"below":[{"id":"24802","type":"LinearAxis"}],"center":[{"id":"24806","type":"Grid"},{"id":"24811","type":"Grid"}],"left":[{"id":"24807","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"24818","type":"GlyphRenderer"},{"id":"24824","type":"GlyphRenderer"}],"title":{"id":"24792","type":"Title"},"toolbar":{"id":"24813","type":"Toolbar"},"x_range":{"id":"24794","type":"DataRange1d"},"x_scale":{"id":"24798","type":"LinearScale"},"y_range":{"id":"24796","type":"DataRange1d"},"y_scale":{"id":"24800","type":"LinearScale"}},"id":"24791","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"24798","type":"LinearScale"},{"attributes":{"callback":null,"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.7791569507375077,0.4075241637336504,0.40377798774479834,0.1459639362303019,0.22935457670145276,0.2699605673562979,0.5881214082529008,0.2212723952843655,0.18264341126714256,0.00909208388290772,0.5370713152464941,0.11104751553656478,0.5433028795347251,0.4938798294551058,0.1881150866637713,0.9514193114598669,0.9262405437507646,0.8884685531579024,0.7175006192244701,0.2368414381703393,0.6340410206376837,0.7868920839950259,0.33004735353585857,0.5680919351704616,0.8742432030020627,0.9307386307334432,0.3376330800598558,0.13782747910292947,0.15268434846676204,0.8817375465313846,0.7990796891087016,0.9882958365701949,0.12868209444426137,0.7502516549292285,0.5555579706224777,0.6819954779645707,0.7262378761307399,0.03238945274469873,0.7808773630743784,0.6723876108418962,0.09303070655543921,0.655696892755717,0.0038214012886660376,0.7549356430729675,0.06334929207922246,0.5307286046391003,0.7768906901709233,0.6172237629238438,0.05816891947502534,0.4168346979192378,0.1521543512905872,0.7944337831480932,0.7275857433686389,0.8094057591059479,0.48654921265805817,0.2916028254435603,0.8532477054268756,0.041229817157299786,0.4388282539319456,0.6997545916583665,0.06573566183306134,0.01405709851284842,0.40929680697515425,0.11381442056834956,0.332264189447523,0.1671087215393383,0.3097291547162476,0.5868630983838828,0.43327080767905657,0.7031281404003048,0.8855477822741288,0.7024008234993712,0.9342007870858227,0.9277159491541055,0.5575322919854808,0.5865424830934697,0.624584185306356,0.1896496986352182,0.19338244438949204,0.37671899380086016,0.9861306515518041,0.10645450995699823,0.02143467024473744,0.3136789414974561,0.08844558759592203,0.9804352664294714,0.8518367193775342,0.7771072702279992,0.7960933500055437,0.47107668035409433,0.9260096883189205,0.9021215684627162,0.6982753823811761,0.07435453848641316,0.8931894339174535,0.5696251720291775,0.8380310912935157,0.08897859031481059,0.12343263497494272,0.8282728703165383,0.7029636248238295,0.8631390673015843,0.05213750401297024,0.9281254768165812,0.5725616024226596,0.07949703374234096,0.5200941683204063,0.3262082121466994,0.2482376014230373,0.03415096354791214,0.33732644735858186,0.7004242590080054,0.8851649081285011,0.17254651038856905,0.9669673904514984,0.7641834460880766,0.026837498629141088,0.5438512793691981,0.5499591551299011,0.4424101599542596,0.2392260221570789,0.8203806135325784,0.29144962845179667,0.8666211800958519,0.07106544538187898,0.8334912523448585,0.5150808957008088,0.5963944494423822,0.839748260778022,0.671657857236173,0.5346541030209717,0.5144730022876125,0.291188053153118,0.48904334564452934,0.34350821372942,0.5573291023924424,0.7604559888937101,0.26826529500113283,0.11433864013321604,0.4395562700590625,0.17943342038907417,0.32728101350096717,0.1451843159778854,0.8061659973080719,0.29815901702883885,0.9938210526488805,0.3765970308618063,0.2563731389354982,0.5223522055460664,0.739218695122973,0.6288208940409011,0.6595199888729371,0.7307264730738673,0.05785195669415755,0.04825591856475342,0.8955869549178876,0.3404167432670866,0.9745616085965056,0.25376863261425764,0.5388508460118818,0.9003564751204403,0.8274905503835301,0.3090201269062255,0.6043331264975467,0.12112953352465372,0.44948550036338686,0.1489848252289967,0.26039264568322984,0.2004398375891958,0.9647969909211492,0.19158057722979305,0.16754992932905177,0.7889191291453426,0.8583054629910633,0.6688375948559978,0.3281446195100802,0.9507274712240658,0.8095441205348332,0.23080215946384997,0.04379478401712733,0.6860767568576548,0.4609973458539982,0.08658686071605837,0.6357699361169142,0.8012609686982691,0.6648293586731213,0.2658877182658259,0.5492290057347716,0.1711095980181142,0.7750666705067856,0.8484124092097513,0.8079425618056199,0.6880016285004331,0.8772872355881625,0.7656564359961092,0.8660377345774778,0.603403533077475,0.5540714912568319,0.39702357727744675,0.9965470880025599,0.5254885530057065,0.8766290179590324,0.5803736927807365,0.3833983802748291,0.11582416257902084,0.6142125608067962,0.8172637627621392,0.7979398028245707,0.8883929505887159,0.7633502093067239,0.5663323532532336,0.9422556406071116,0.3588188531398512,0.9735961544055145,0.02182172745522326,0.8915885487319913,0.9396979089542054,0.509670306957988,0.37860902256247164,0.6870665418225755,0.6110810626320752,0.5211856288904685,0.8454571190161179,0.5294783906121802,0.06415723965551301,0.5869296754495957,0.6855206126219362,0.386001307342843,0.6466670910295278,0.23602131289386086,0.7391487340276196,0.7331180048585645,0.7152765255756578,0.647707651747707,0.04313079351287441,0.25318555400148246,0.14897545067105944,0.2490434357136817,0.9221089593215439,0.7452135388713925,0.10025441851714323,0.6379690085331325,0.6194048667742343,0.08563659308604232,0.5662896065707778,0.5643985450262393,0.6953918104020335,0.11414621350382448,0.8604656948635464,0.41850319253836044,0.4879207721406932,0.6379171659868381,0.9019788207109953,0.14930122526357315,0.23721934700618696,0.5052897570293196,0.9364464262654179,0.21306723740253475,0.4688678264614561,0.6478261986966419,0.6695988364498414,0.640310374579233,0.7012748116951143,0.844109812303232,0.752881158718004,0.5616056787402524,0.49311710313586554,0.03917308737424752,0.26783431543381686,0.7661778507377397,0.3493775064055429,0.2278101849547719,0.5450265338600399,0.06099309729647595,0.8313445799680929,0.9702312624395341,0.5509617850617196,0.5757392523548788,0.5793673367058888,0.003472504168560153,0.5830903513736871,0.29926507854817685,0.10168320227859429,0.6971237228084566,0.4939516907341124,0.13878621811676473,0.845430579197259,0.46946382874937354,0.8329873065334555,0.6366481747311387,0.4722234098753344,0.8869233666278731,0.6727005814784084,0.9249716407339618,0.4282077816692321,0.9468589127738942,0.6521083338794254,0.05547545658299635,0.05553648029492253,0.26636471513146853,0.35989806154055315,0.14784484714580115,0.4360065810524735,0.6456309297918613,0.34118793166292627,0.2089241517796927,0.5443368912962557,0.4779207952166806,0.41478286411824394,0.6764530236719947,0.6199625018410914,0.5825006031757899,0.7754293957606837,0.6754609184000611,0.09328399303824308,0.1974461426745452,0.6727636361175705,0.9648932660548754,0.07444041376043464,0.7896562522859991,0.43346507373844845,0.5031646314434842,0.2638485560085492,0.0639978096746141,0.5277089188930995,0.4918242859962346,0.6433049437918004,0.9687190718242585,0.6900177857888382,0.9650947229400123,0.06150654845100423,0.020810918040010007,0.6230370569388226,0.40522884274204873,0.5897822815691081,0.9370994256648856,0.35756309599643066,0.8931653593454022,0.45603346328379935,0.7893085133798892,0.2415584007153906,0.8314972978229856,0.0989432079493503,0.49598646148068426,0.7054208912281444,0.5586064566374981,0.10739116778078517,0.1300941853963441,0.7613936701230519,0.020162460430669715,0.5113766082196138,0.5998960261711738,0.8286947694275799,0.8193822252166642,0.8387972210313518,0.5198211614653593,0.4039986594374142,0.07741959709733015,0.8819138559346986,0.01915730196883214,0.8623439945456479,0.1968327993365766,0.7040087438190917,0.5634196051234515,0.05019235920779119,0.7413986156735495,0.041431317168550086,0.8128943135652537,0.6712721633320831,0.9889402913765359,0.4372901843919761,0.7683022062532058,0.4838849610767495,0.013716642681310454,0.02390101199955008,0.8152796522225257,0.7660246762386678,0.6482944790785238,0.630143526472736,0.7701887523999651,0.9070318406880208,0.7585695010246163,0.984115484617133,0.4424148220713837,0.8779331014415964,0.09987025802900173,0.5562776657934652,0.5110616501560409,0.7817333583422204,0.6304691193939258,0.15512573533086416,0.7794961039276879,0.4447562859508173,0.3955552698565248,0.2203665968978199,0.4397875079835478,0.018522592930858228,0.9856976905530737,0.5383046383296433,0.3812051645658857,0.03640775946364283,0.20831909373138224,0.1827561364609207,0.5102760606843458,0.6009492867337967,0.9589824400304316,0.22294094050224778,0.8727763975865415,0.110142072100746,0.5665739292362325,0.34112908245843454,0.29301400399026023,0.6675760723892054,0.6032764985765654,0.015951123496386832,0.6755757809884465,0.4443165053803164,0.9250944951256618,0.38856863474649783,0.40320344489824267,0.422555992441044,0.6655159999380478,0.6735100443377325,0.5845964003661697,0.7823128186743631,0.3802553739740716,0.8076442594283182,0.8461994506764481,0.1852679010191881,0.4849540025152367,0.8393441800634472,0.7516612731928718,0.29988878756395865,0.44059475271999415,0.2885315574134617,0.03124592290216499,0.8536966324259404,0.25041835548083147,0.13917972797837974,0.9226135524145807,0.19683083949221025,0.05145171834238682,0.22742018141945786,0.7640098057452852,0.5892848760931918,0.3794531225569808,0.6114220214072725,0.5190352848111679,0.8374079276846288,0.4737711792039677,0.3177049420786767,0.061877315159695745,0.6213299551641772,0.13890567426551048,0.563553073499459,0.72510416256855,0.6759457934954441,0.3920259340360849,0.7174520557751547,0.7165954285490824,0.18849747583298349,0.6500869994613371,0.795833621437595,0.027331876830731905,0.06079344812863363,0.676245270069626,0.7315233394286056,0.8432207340515149,0.9990131048809374,0.49110961457761815,0.7896732961158465,0.22430836620762684,0.39486297039027296,0.5270851016131932,0.7421639594744853,0.876548739946725,0.21010297699915836,0.21729813275225285,0.705697972205797,0.048220560423056336,0.9066091266663163,0.01748769754010937,0.46306556462559256,0.6462584693800351,0.3291647962972125,0.17434455281721228,0.35114244008658957,0.1842566571209754,0.5778272543300629,0.3151080541178166,0.07474949287762656,0.9134370390947316,0.47911090902064757,0.4562801877682162,0.856339255330919,0.21488850505467139,0.9513226759467815,0.40912322047058725,0.9565958560241119,0.8789322568901289],"y":[0.40459048940122855,0.26680717521909647,0.4886524185131519,0.53727921915498,0.46660674710202377,0.9815047862878556,0.9400935071749006,0.4567801905010148,0.020676661756267145,0.03877466744314784,0.7152432088374232,0.09324215572323225,0.8636621653306457,0.7348216541270151,0.23862474113138687,0.1049277439985784,0.8891747150786757,0.25309808612303497,0.20398771241623648,0.7981783670109637,0.47097490768741956,0.07196210513232171,0.16882841171898888,0.5402308113552465,0.12776675509154933,0.06734602516000043,0.5253040658595703,0.6946211426392814,0.26600325615882947,0.007935619073629163,0.2960514363231942,0.5787710539687255,0.3307474718013035,0.39530022951847044,0.5859988697343086,0.7725892193439895,0.1805594429131827,0.0030272473901211683,0.43892364857177646,0.44341484601214687,0.7444926275132097,0.8456243128578358,0.6384530545970519,0.5866870642210855,0.508445512789077,0.49365545234298835,0.23522321679506042,0.3584885640343115,0.5002992382826658,0.943507983969344,0.8285704183051595,0.4295466266671176,0.1821588509107943,0.3247938924061866,0.5238612023515515,0.7445984326714671,0.21602333526188777,0.5465262827352843,0.6228682939598978,0.003600960323316138,0.07204574426510146,0.010926449665126348,0.23925208555607957,0.09959697334523199,0.43298822245222346,0.6403824706883132,0.4142345873423964,0.3918649130197903,0.9722927656610633,0.9386763460064238,0.8142273530394893,0.7769402860072451,0.3023544915986133,0.289603720809966,0.04306958918971304,0.8287087868877722,0.12574998466360454,0.7014308265375827,0.1349932372289181,0.6873339017732938,0.012111133062214563,0.5183922414316333,0.2524989143532217,0.5053663381337403,0.04280140798384624,0.6053950498500402,0.05609777343695743,0.7922934586068932,0.627368671052664,0.44116557019374525,0.8810743766315284,0.5447764839554583,0.9295726075239107,0.3151747543407508,0.9541172928889997,0.5274914591103406,0.9928890669556857,0.789266889715304,0.5347959866138197,0.26008696221812666,0.20114199917194142,0.0944809314737255,0.7648951508735696,0.7914443386141227,0.7396409652655619,0.7783442146160281,0.1160181127337,0.9530728651094399,0.7506969513123285,0.7256731537693429,0.18521933065167384,0.9253106035327711,0.27270631970437165,0.2832785281801028,0.31747893375877634,0.38803304763558355,0.8752801520468131,0.6411335508957041,0.3544067011621016,0.3575838326041636,0.3759657706372981,0.8731076417738751,0.39445292942754484,0.7157312545759775,0.1709358080480663,0.8771765095633234,0.8440232925630119,0.2786979234919982,0.8550539225571339,0.6246357611316492,0.8116225836266642,0.39305943047777625,0.7668635565373261,0.5564443451535452,0.3181496532075271,0.5265788858763543,0.5272677619062656,0.05643419975960695,0.6154976129918458,0.4979056771107643,0.6538000661259808,0.09084332966359854,0.18676155245532333,0.8571987309190562,0.7337470213427447,0.3915648719536734,0.13182623363783774,0.4302434481789724,0.4957550187612203,0.5241719443630001,0.5095938486835148,0.9813039365634426,0.3113258732137245,0.03234023828741106,0.20377360191051497,0.4674833297138009,0.06714515144671052,0.930402550821703,0.05871548611127675,0.7854052289640207,0.27854848759995043,0.5506275578696738,0.2114953060264969,0.2857413113699101,0.9935783038291093,0.28081136472085433,0.33107139865400936,0.9232118830400945,0.10465288357803515,0.10085196433515375,0.237389760987198,0.6546333087074941,0.5896383084865663,0.22204822575381045,0.9698659060388961,0.28385462741511813,0.8720888733216036,0.2570733039944135,0.5260014365413431,0.8900485944044773,0.022500568345404814,0.3638936610381953,0.856238222449521,0.1497217460095286,0.4685725728321266,0.7186819252333901,0.7277640735995038,0.9167777738116144,0.8850129383168549,0.10878354954427161,0.5179591259953127,0.611547903721564,0.2359549319427413,0.026408824209166237,0.387899003946249,0.9656101469758692,0.24909822550068217,0.3923674430284665,0.8033105731061452,0.17058247325417952,0.589740035968847,0.02322204120000404,0.6213196221190421,0.5139384657774385,0.13193725980231286,0.020073916817154536,0.8961083122878242,0.6776784843323036,0.47061829954553336,0.6580566604173693,0.567697407092134,0.27660397964743266,0.9435070692681411,0.9335935309841815,0.916271615145669,0.5292415875857955,0.967463373349215,0.540153361193956,0.9319026869884449,0.41521485191190166,0.2676254696586212,0.682126525648431,0.3141305370915628,0.2300271328496274,0.5481496473503146,0.100947641827977,0.04516214671888208,0.8979276480995958,0.3848806008851373,0.34611438717453413,0.6404263241007017,0.7990832784877221,0.43173392381749676,0.37863924658595616,0.42208667624089513,0.0633548717783432,0.2154649451979237,0.040970310979908775,0.5938787449448338,0.22502405475234222,0.2564357480127728,0.06703285031858452,0.4273636637090015,0.39868478085499226,0.9414172019766713,0.16087087264637923,0.08996565163895853,0.5914364463350725,0.8579065733038672,0.948881833532907,0.75873689305569,0.9958155729404784,0.9570472583726735,0.44409452446610986,0.4064198147040273,0.4032716596035558,0.5282866632663508,0.3416192047546054,0.9096384578518628,0.48513533555084265,0.34670909019920915,0.16002477503372137,0.39934349817879466,0.2762983498608452,0.9324590660313493,0.042910837879039376,0.6595299312187133,0.7890027390743242,0.1773558677232483,0.3715741421445342,0.37462388009077363,0.33812152816329333,0.22796196713454608,0.3225978683374523,0.892323525484813,0.1978545161382651,0.49901615100303,0.046464236395767466,0.3143362174649025,0.48943048059593197,0.2665802822481991,0.21218526965776374,0.162356601622497,0.10118824430291606,0.8299851037641264,0.28894479745547463,0.2204707062061353,0.1985873287247215,0.2518389091574311,0.6655708998368431,0.8264012846715467,0.1044937514162142,0.5618088173832174,0.5684537480124728,0.8690694499744852,0.29931947355076904,0.2831663302188623,0.09005724429001771,0.32377094062847167,0.8960498905697378,0.805851268403915,0.6393908249529577,0.7942888146607526,0.9314639256172108,0.2419992206215369,0.7072353480299416,0.3742274076138975,0.985535403197478,0.6500552464166078,0.6020351010930358,0.593829520731311,0.4676012623172283,0.13886604589618445,0.207237422894877,0.962416358412132,0.9988941516315316,0.023054103353377098,0.6814618094745082,0.5466709046235879,0.9262175654719861,0.1368328472071928,0.30339785768448824,0.8353438210219781,0.1293690153631334,0.7924744275553596,0.9726898718538942,0.5245662141346906,0.6621112182485097,0.6262755849697411,0.2781338147459457,0.581705696199768,0.42002512306561934,0.8035650935486529,0.6132265325758016,0.7593490015975702,0.019702463605608678,0.4866173386970013,0.5422011702946029,0.6300186382561636,0.1398330395432511,0.5483501145094781,0.5857087435713928,0.7453793515369906,0.599185332588462,0.11901845492062191,0.2761170205418596,0.32366463286937164,0.14826432544361234,0.925921464323661,0.0719993734799349,0.36209737044998147,0.7612746641339964,0.1799150510459222,0.6999781021191985,0.9386656335242904,0.3942027898909729,0.551260359127614,0.4033164970545502,0.15640451811012046,0.23035909369979146,0.4703147596241304,0.6820051758900066,0.12067275693004864,0.33295029918122165,0.3437238398471063,0.4792619157654392,0.9203611332248693,0.08777695848529732,0.2617426758497622,0.8627347423483938,0.5254062329461885,0.21971816748378725,0.7859798992693244,0.8030809456932907,0.570356378670981,0.7550390774199341,0.8427775553572184,0.331224255375294,0.7910020979766301,0.4273219366977725,0.17895686184772908,0.1743222785154811,0.49564011983043377,0.685493330776064,0.471491277028416,0.23713328392929178,0.49927285898906526,0.6732476180846999,0.9639468851379669,0.38749308184357123,0.198154697751728,0.5950055561540855,0.03856839916856336,0.14258070916465893,0.026643308425474577,0.34107895655398557,0.8060507876397566,0.805813293181546,0.993898379612396,0.8506545189481138,0.4316157915800892,0.543978619852069,0.9515452094638244,0.8102414587253467,0.33745070914274156,0.07531873725643279,0.5326289819157015,0.02390552652584821,0.21653275340488554,0.664943408508641,0.4085815661879014,0.3874918043381642,0.4606130315918936,0.05120085754687165,0.33879193071310765,0.9101170088960499,0.30186849248301384,0.4847924546493656,0.7169605598234396,0.46911213476477187,0.909023186993704,0.7114489752909882,0.06783458301829548,0.23392082111507928,0.7095910210782359,0.30938690951922077,0.2627108119791618,0.4117668058372691,0.294818027633974,0.08929152685306585,0.14085151983901922,0.5602814186017869,0.4932788479743071,0.040413549634089496,0.7071189774931451,0.2913988291081929,0.965728518808561,0.6627287759315565,0.19362974416950318,0.23021785183577592,0.4712571117205232,0.4770051469111637,0.16847521668301735,0.9297419111799449,0.04256139814627269,0.7835093399049737,0.6748268088460581,0.11415400018086941,0.9738125606855081,0.5556679911172799,0.11802105266271479,0.10613929805490063,0.8005337436098608,0.6226649408184853,0.24328703857184875,0.345570506716365,0.7844087033468273,0.6516738873024036,0.17390386173948114,0.9540547227494021,0.3905795621287397,0.26861157396937063,0.009157000457674536,0.674559416900387,0.088613188586664,0.7001861997274192,0.9525362927621636,0.47373316816043787,0.6830613117056943,0.1921809438816774,0.6988861657852309,0.6320206449794148,0.6474339773109471,0.9213480494725284,0.7617963691080201,0.7932666281058269,0.7878454313618959,0.010520748811532976,0.8910474299098241,0.04109797735778686,0.7746650186019989,0.25803273738772414,0.20588731993366993,0.11395067387630875,0.6945474921035142,0.5571691646389334,0.8681166650903666,0.8078058715576913,0.48883026238840765,0.00317735675574482,0.692207052531299,0.8430287451942472,0.5349057369049345,0.9289429615462701,0.8661438790943791,0.5236307965379188,0.7793678336443699,0.8968799152723579,0.7224711058301085,0.5511338094623917]},"selected":{"id":"24826","type":"Selection"},"selection_policy":{"id":"24834","type":"UnionRenderers"}},"id":"24790","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"24803","type":"BasicTicker"}},"id":"24806","type":"Grid"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"24822","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24812","type":"LassoSelectTool"}]},"id":"24813","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"24837","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"24817","type":"Circle"},{"attributes":{"data_source":{"id":"24820","type":"ColumnDataSource"},"glyph":{"id":"24822","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24823","type":"Line"},"selection_glyph":null,"view":{"id":"24825","type":"CDSView"}},"id":"24824","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24790","type":"ColumnDataSource"},"glyph":{"id":"24816","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24817","type":"Circle"},"selection_glyph":null,"view":{"id":"24819","type":"CDSView"}},"id":"24818","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0,1],"ym":[0.5,0.5]},"selected":{"id":"24835","type":"Selection"},"selection_policy":{"id":"24836","type":"UnionRenderers"}},"id":"24820","type":"ColumnDataSource"},{"attributes":{"text":"Select Here"},"id":"24792","type":"Title"},{"attributes":{"callback":null},"id":"24794","type":"DataRange1d"},{"attributes":{"source":{"id":"24790","type":"ColumnDataSource"}},"id":"24819","type":"CDSView"},{"attributes":{"callback":null},"id":"24796","type":"DataRange1d"},{"attributes":{},"id":"24803","type":"BasicTicker"},{"attributes":{},"id":"24800","type":"LinearScale"}],"root_ids":["24791"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"c9924176-71a6-4232-b25f-fcb1c01ef0be","roots":{"24791":"b14fce74-30b9-4bfb-b4a4-e3ae6afa0bf6"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();