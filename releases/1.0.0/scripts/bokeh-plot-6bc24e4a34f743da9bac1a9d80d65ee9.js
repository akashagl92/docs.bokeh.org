(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("a66cccb3-c00c-4c7f-801d-c68b484b9b4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a66cccb3-c00c-4c7f-801d-c68b484b9b4b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"d3498466-d339-4e4c-ba1f-b3cfdc7a2085":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"5656","type":"PolyAnnotation"}},"id":"5655","type":"LassoSelectTool"},{"attributes":{},"id":"5708","type":"Selection"},{"attributes":{"formatter":{"id":"5700","type":"BasicTickFormatter"},"plot":{"id":"5635","subtype":"Figure","type":"Plot"},"ticker":{"id":"5651","type":"BasicTicker"}},"id":"5650","type":"LinearAxis"},{"attributes":{"source":{"id":"5633","type":"ColumnDataSource"}},"id":"5664","type":"CDSView"},{"attributes":{"callback":null},"id":"5639","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5633","type":"ColumnDataSource"},"glyph":{"id":"5661","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5662","type":"Circle"},"selection_glyph":null,"view":{"id":"5664","type":"CDSView"}},"id":"5663","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5665","type":"ColumnDataSource"}},"id":"5692","type":"CDSView"},{"attributes":{},"id":"5707","type":"UnionRenderers"},{"attributes":{"plot":{"id":"5667","subtype":"Figure","type":"Plot"},"ticker":{"id":"5678","type":"BasicTicker"}},"id":"5681","type":"Grid"},{"attributes":{"callback":null},"id":"5671","type":"Range1d"},{"attributes":{},"id":"5641","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5689","type":"Circle"},{"attributes":{},"id":"5643","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"5667","subtype":"Figure","type":"Plot"},"ticker":{"id":"5683","type":"BasicTicker"}},"id":"5686","type":"Grid"},{"attributes":{},"id":"5702","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5655","type":"LassoSelectTool"}]},"id":"5658","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"5656","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"5687","type":"Toolbar"},{"attributes":{},"id":"5704","type":"BasicTickFormatter"},{"attributes":{"args":{"s2":{"id":"5665","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected.indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (var i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"5693","type":"CustomJS"},{"attributes":{"formatter":{"id":"5704","type":"BasicTickFormatter"},"plot":{"id":"5667","subtype":"Figure","type":"Plot"},"ticker":{"id":"5683","type":"BasicTicker"}},"id":"5682","type":"LinearAxis"},{"attributes":{},"id":"5651","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5669","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5661","type":"Circle"},{"attributes":{"callback":null},"id":"5637","type":"DataRange1d"},{"attributes":{},"id":"5678","type":"BasicTicker"},{"attributes":{"below":[{"id":"5645","type":"LinearAxis"}],"left":[{"id":"5650","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5645","type":"LinearAxis"},{"id":"5649","type":"Grid"},{"id":"5650","type":"LinearAxis"},{"id":"5654","type":"Grid"},{"id":"5656","type":"PolyAnnotation"},{"id":"5663","type":"GlyphRenderer"}],"title":{"id":"5634","type":"Title"},"toolbar":{"id":"5658","type":"Toolbar"},"x_range":{"id":"5637","type":"DataRange1d"},"x_scale":{"id":"5641","type":"LinearScale"},"y_range":{"id":"5639","type":"DataRange1d"},"y_scale":{"id":"5643","type":"LinearScale"}},"id":"5635","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5690","type":"Circle"},{"attributes":{},"id":"5706","type":"Selection"},{"attributes":{"data_source":{"id":"5665","type":"ColumnDataSource"},"glyph":{"id":"5689","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5690","type":"Circle"},"selection_glyph":null,"view":{"id":"5692","type":"CDSView"}},"id":"5691","type":"GlyphRenderer"},{"attributes":{},"id":"5646","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"5708","type":"Selection"},"selection_policy":{"id":"5709","type":"UnionRenderers"}},"id":"5665","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5662","type":"Circle"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"5666","type":"Title"},{"attributes":{"formatter":{"id":"5698","type":"BasicTickFormatter"},"plot":{"id":"5635","subtype":"Figure","type":"Plot"},"ticker":{"id":"5646","type":"BasicTicker"}},"id":"5645","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"5635","subtype":"Figure","type":"Plot"},"ticker":{"id":"5651","type":"BasicTicker"}},"id":"5654","type":"Grid"},{"attributes":{"below":[{"id":"5677","type":"LinearAxis"}],"left":[{"id":"5682","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5677","type":"LinearAxis"},{"id":"5681","type":"Grid"},{"id":"5682","type":"LinearAxis"},{"id":"5686","type":"Grid"},{"id":"5691","type":"GlyphRenderer"}],"title":{"id":"5666","type":"Title"},"toolbar":{"id":"5687","type":"Toolbar"},"x_range":{"id":"5669","type":"Range1d"},"x_scale":{"id":"5673","type":"LinearScale"},"y_range":{"id":"5671","type":"Range1d"},"y_scale":{"id":"5675","type":"LinearScale"}},"id":"5667","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5700","type":"BasicTickFormatter"},{"attributes":{},"id":"5683","type":"BasicTicker"},{"attributes":{},"id":"5709","type":"UnionRenderers"},{"attributes":{"callback":{"id":"5693","type":"CustomJS"},"data":{"x":[0.516889092483072,0.30191282781696116,0.4563225405744977,0.21267544261319737,0.3790782049257174,0.18262236042564606,0.5193278728556526,0.2776506443868886,0.5123436087011042,0.9758055721485047,0.3686564839059181,0.703469886173174,0.10353708727094968,0.2838896444620168,0.4065548992774036,0.08661908467082624,0.3420966358866203,0.4366990318269752,0.8915010207169098,0.7918390418225336,0.8092555604556508,0.12429877639740505,0.4270890410710847,0.6508973674578774,0.9198437592099963,0.5104539921044559,0.7510810664257748,0.7565017734951036,0.4083804774357721,0.6550603602292302,0.8579986339203932,0.2632100024702909,0.6640992202073155,0.44819310527985623,0.7309756146045452,0.46955180822166054,0.4750997783160583,0.7260256451956666,0.8040030469372894,0.3297606373657578,0.20250537915533662,0.9325104779484761,0.9086874263810361,0.042547790444084854,0.6714383429646982,0.15986617068134812,0.7702052507209384,0.38715070271534147,0.2095998406967593,0.572930340887756,0.7105827650330978,0.014763911733366997,0.9732353704220804,0.13055404411210825,0.29422245863347973,0.7253621328210007,0.5717427881403863,0.44623276560183067,0.09240653945421662,0.21359444187445387,0.3577564748766795,0.6502567317561415,0.9869615483091806,0.2851396223917202,0.454681413357654,0.4276730914501181,0.48867984477606174,0.7901745352677688,0.29243393574447196,0.6884799296465918,0.8180945043173712,0.2845798099233835,0.4571031976700295,0.6810141466949071,0.6702462968054185,0.6704020674924134,0.6161453203702237,0.09222203987293676,0.871858067085184,0.012321592762434164,0.24430242985768635,0.3348071137700467,0.3807429311920417,0.15670585849835394,0.8533477593518974,0.8503704001730659,0.27092139087350664,0.3735885130733223,0.8375011594359721,0.7090873217662129,0.9366325961539239,0.07877589660951911,0.3437334659377469,0.42045436286707605,0.2471042111447328,0.12986971249481138,0.915701376107159,0.7590404080141386,0.026126423932920195,0.7598221343453885,0.36697985310207937,0.5432450502759202,0.25171949133363614,0.7502338887626862,0.13902132597879469,0.9261549688222891,0.8094229345008372,0.5510583206822673,0.059670858724294895,0.7099936013909149,0.715760668160272,0.6480931610659818,0.2920934166291477,0.0053742660831581635,0.6880322262146711,0.7836830087601352,0.4533518597950045,0.24941105536019892,0.8292260273350737,0.9347111356086437,0.8221739934766228,0.6552005243921172,0.7012617795692353,0.9224962679368549,0.9438287819679567,0.7825764388255999,0.48101034826517974,0.7287709676916899,0.2680265044470902,0.4256905172749256,0.7010451376472154,0.5918878789614439,0.6303310943611067,0.0019881433251948133,0.28334697079548754,0.5979642066374201,0.043983767922857075,0.7124758944546261,0.651194337679704,0.4681973076075021,0.7049811186076362,0.3413540498635269,0.44383657306493907,0.4332943621827021,0.9040211383948474,0.9076304068210629,0.26221327301588593,0.9000228134294687,0.5714333796043738,0.8686006612518901,0.5763158998368966,0.015110232211512087,0.15601972546412834,0.9687852292839583,0.679787446365987,0.8139358964500095,0.35926128898668663,0.2570404091097612,0.7604685275744975,0.20542468256960278,0.6268568279962268,0.9910309649901379,0.5131273183476522,0.38696157906192774,0.41863418040861233,0.9120788996110788,0.06882549692895579,0.645840511121399,0.5673635491190903,0.03661918006380449,0.5631356699501932,0.8852857242826728,0.7025311449122772,0.3534247407331571,0.88355224075225,0.10136531526978299,0.4443064452968528,0.687938406248189,0.5723902903087005,0.09622464475358916,0.21786748181986704,0.11847582986686733,0.669692238441834,0.669223534690591,0.5972601069889186,0.27051791397206226,0.524404301603456,0.09240271283547996,0.4357790856592779,0.8208745852078133,0.019980112483275247,0.7871441100621486,0.4284720315399757,0.19866180343288176,0.6510785509714849,0.10795982586960429,0.6726058607549906,0.18420341625609782,0.8519558086879945,0.24770934755450869,0.07416201746473283,0.6350601732300537,0.4048340364088976,0.5546698498935942,0.8802305378868737,0.6307580154792577,0.07440492269027943,0.7038331085814427,0.5055351279566563,0.27063173101599314,0.7487015519877412,0.4017647023722021,0.43486466791700074,0.9831588653203169,0.9549222579535465,0.6587244339921986,0.8775568629911625,0.031503479843869586,0.4034767843097593,0.35548342035741953,0.29718228718267914,0.10083152750538737,0.9183267434550907,0.7717530657964692,0.9090486139251741,0.29990229243327515,0.4719152808313247,0.5274193970620479,0.6505932604148705,0.9574553343156685,0.844205514105233,0.7370959196870371,0.3731156820581044,0.16773711681346115,0.059240900745333835,0.13840991672470604,0.3677271358987322,0.8141890135665815,0.5276750824600095,0.4808213700355243,0.31954894932933475,0.33548945825782883,0.9411832232433943,0.10647592037945719,0.5540019472027783,0.9664375388159744,0.1862277938466288,0.42946273763226583,0.31206634811867917,0.5812119221871426,0.526296454148406,0.5518210481099133,0.8425852566359616,0.35663642501328285,0.4610406564372409,0.9145122875708336,0.5699276441030001,0.4949206422377972,0.8313055253611202,0.9109469284543951,0.1499088937011801,0.32153084810850185,0.627868882447562,0.45822112322909847,0.04158316698764786,0.6783895724358026,0.10803866532398654,0.619709065728096,0.9005055455622618,0.6804331535536017,0.03898610225164023,0.7465969386573933,0.6728607457782957,0.3612392745960389,0.3508753285962939,0.9989895368221446,0.8370658835777669,0.7031576253227328,0.9795812694546063,0.07830942311495481,0.7774702679700396,0.643329319247476,0.4405559873683099,0.37963153278575246,0.05410319128678831,0.12661298457858172,0.5573910384990849,0.9390581386124104,0.04693653766757666,0.6398977400694495,0.3985830587214937,0.4778445175375228,0.48540739511252273,0.8852242697117222,0.6228003531180494,0.38481661048817584,0.8842798607603596,0.015507670573452592,0.8453107417064383,0.40579162774815347,0.7118633117704789,0.00408432361760247,0.308851717853621,0.5562831533590716,0.5599828591854831,0.9201893672825315,0.39590185227279595,0.9118564155566629,0.7624815475516739,0.5710804312214082,0.8434710684603249,0.24275881958502543,0.849816694772308,0.0422803226692261,0.8041980005102253,0.6269007852984808,0.6719064454166903,0.5628472330693503,0.13747196748955837,0.4804773308137833,0.6743960836751518,0.2527391236571688,0.2661270867950095,0.04831920026659897,0.4814246233667202,0.42084218999299794,0.31685746330808306,0.4388924404620127,0.7459919746660266,0.600457271615963,0.8916801699667373,0.8137926380653681,0.8449407226670358,0.5381988766491677,0.6240512426040242,0.10063982634877211,0.30789771492222895,0.9922641472197037,0.7145236627526621,0.38766634349818174,0.15477644094753173,0.1817921810453057,0.8551192677445628,0.5089192386992637,0.00908667084434589,0.7684675201758959,0.6369893396628595,0.39592064743967803,0.050484371435703834,0.3510814748571398,0.8929755303045019,0.644802296687114,0.16125017975190736,0.6371265577075053,0.026688060924122126,0.6651056241889972,0.6102056267444319,0.3504085615121697,0.1328568875026459,0.31075735057280274,0.9714536685755107,0.9774791199599254,0.319309485638984,0.170928091743763,0.3402755039522144,0.8195037617222245,0.09195607128224281,0.46239835424567366,0.8280674833357837,0.5208135021277238,0.8710606291531747,0.7255434558021768,0.24902828171221603,0.8514907708668379,0.3904394460705498,0.4133373937230872,0.4946170456306832,0.9184309414249391,0.96387629964494,0.8422360684069474,0.18969629611415117,0.2777838229023808,0.21444907452664852,0.9890651241804969,0.0869232567522803,0.5280470725573172,0.04279212493664453,0.4136048507029002,0.09079597333013534,0.19673529212570762,0.13546798249707548,0.610638188012912,0.1919489903586794,0.682149899685254,0.7321223623319152,0.2937210667166126,0.7919440616087918,0.4373469128937183,0.7260261397989273,0.3696227385467199,0.5970400767983317,0.48060144854487397,0.08464087381383456,0.12179474091063502,0.3404638318501366,0.14331337505370167,0.14965200457213756,0.3715471028135421,0.386028642271003,0.8658023380164322,0.9759553332838339,0.25095380385366495,0.2613001558480029,0.46891437669477887,0.022177228765823842,0.9046426189810742,0.9802907742877432,0.3498153064348595,0.9901316876293965,0.7097545929878101,0.21379646319123569,0.1975718346025993,0.16394644564282534,0.8403990861005259,0.05926592125616026,0.20285474129100944,0.6032080418235355,0.4406919181971022,0.033738425675194694,0.8963991370951253,0.11394643339519561,0.9600897359544823,0.5930686500897179,0.9411793181039855,0.39017935256162417,0.4291686826041713,0.08038728815670504,0.8061173478409761,0.4070004458502209,0.6095498642804077,0.6734789475768354,0.8277675184989668,0.6541407340791783,0.31561159085931845,0.7842862237954747,0.5279409628144401,0.21341406260755424,0.3045340165402931,0.3067253958950986,0.3512837949105857,0.17890014821673594,0.6600794340796927,0.42952555662382064,0.6244971081055414,0.5646748431770376,0.9829808150375081,0.1296498617222236,0.40432676083725605,0.9140050160093213,0.03655656890082837,0.5328697448223928,0.7169666457806255,0.33527535903090533,0.4893064505679622,0.4088200752014163,0.6433913940179247,0.36333724381148613,0.7084964933218847,0.9091747758188671,0.20380608398176492,0.3817306562064333,0.9110992966047771,0.6998014968092331,0.11427214502369332,0.27703982815097505,0.17967676563880397,0.9243011799282983,0.18081799657920294,0.3030152813127237,0.9303474392380788,0.384086867579964,0.1665527820438456,0.1500401993199144,0.3359707251253897,0.9352696988108478,0.7467726016482886,0.4148257483533958,0.21191608004863827,0.327263303799487,0.5258349967639797,0.8114779991943886,0.36689593868476,0.6633983195538936,0.500386113945394,0.34148859883526084,0.3704786346204715,0.3545451687155251,0.4424915984197312,0.0012900256463413973,0.14460264859029948],"y":[0.8220552556784618,0.32383638582173124,0.33766969202176866,0.3380169725084008,0.3682135856646598,0.7102643490146907,0.5896467363787347,0.6403558988671848,0.9542407927585665,0.19152656584717243,0.29879335571898735,0.9045360954280596,0.9086799400913085,0.1321826323971257,0.9618791443268796,0.531271529595274,0.6080713914160416,0.11231139583185146,0.6182642464693434,0.46290171810902725,0.23334736106194365,0.7015402696965206,0.555709660598361,0.8450637572490343,0.836954119222056,0.712611389908586,0.17748573483869867,0.8643936991728924,0.24511622054853677,0.4040057105575542,0.6404267248391561,0.20457207115252463,0.6215609560552715,0.6987196601585138,0.039393643150899216,0.996229857820122,0.5545177341162287,0.5219674935059693,0.42775402968968346,0.6883665737736094,0.17907428253311064,0.5155750192880063,0.8676700149774962,0.5227817333411008,0.9741770379489072,0.17548243962363208,0.25404786056833384,0.2933727420380158,0.6307571023335624,0.9028115435929467,0.16029660273801305,0.6038855030451187,0.05817827674784182,0.7393156266344093,0.8512980983457542,0.38947026510233207,0.495225668143937,0.8557648035046411,0.32523667244251186,0.021521304426319943,0.48134610373030884,0.08671053525803352,0.3710167428066746,0.8836678650089622,0.6167583689389982,0.6668099809130948,0.34457174561046844,0.8989003972700774,0.779015365092197,0.97977743937715,0.19190255499259923,0.06715746792210775,0.3334765246730892,0.3361587089029152,0.6402594394943973,0.5566543436809365,0.6822160211514973,0.03591462885586583,0.9587324772423625,0.46588004136901273,0.1623967162385822,0.62309275650467,0.42890853829541065,0.28384292269444955,0.45363277884521314,0.17799188402363952,0.04448017938090343,0.03696725312441629,0.6826149466037887,0.4631427592030425,0.0665456598808597,0.2431684370844538,0.3509729952810231,0.7100090812892382,0.4524135024211102,0.25469786527782345,0.959377097223224,0.5068591155040177,0.36788847317824025,0.6977365667673596,0.8103816387361924,0.4670275306718986,0.2272751790875639,0.6519155602451943,0.5235388602495824,0.8894178303079426,0.7242106748370429,0.783264570961701,0.4883403017795568,0.6918216580832304,0.28160336089079374,0.35098544336236626,0.5177550993205409,0.33503991234609753,0.2558780064840638,0.8361246315528341,0.6096647266158508,0.5556074426195499,0.03481515637209476,0.29736908746561996,0.42352019114721484,0.9302877356083515,0.6319443016035824,0.2210465959686123,0.6614539586780775,0.13555922792645947,0.4282826944081888,0.6735423358353986,0.7410859733159508,0.41094524328592186,0.27575599781770577,0.26683071216306986,0.4395785720510662,0.1799751507047519,0.6667394655931379,0.637598134653714,0.032751143477166345,0.5223472077828268,0.02764063044295617,0.8499719591607872,0.43436039989236364,0.37728793272096905,0.3220433687773232,0.378493391322709,0.4685955727565405,0.48737429771359897,0.3389020815327094,0.5438670562168538,0.6488720962098928,0.6895596311740579,0.8307834392769702,0.6179585263562261,0.11935233244896781,0.984037819409847,0.7685156201152589,0.5810613521431202,0.00018995934476995213,0.600990125677752,0.13376516388433857,0.11754814396637703,0.4809410008342526,0.04762421596983357,0.4376283376174429,0.9423937663022228,0.35074304658927036,0.12632165298400977,0.504379238210835,0.30023923264710184,0.2315116646855918,0.25284471710465184,0.5606619475970899,0.25897988255076876,0.0801643119531893,0.20487412474113775,0.15551538856061553,0.7720849668762642,0.9866020608972107,0.7452394360057754,0.8566419176787702,0.35526001536818286,0.5953119937793449,0.5883892390504581,0.6265092324572784,0.10900917270904675,0.8736119295924135,0.5538293262033572,0.7530943617037338,0.15665504721330303,0.503902552409251,0.5516619674451161,0.07362921768046093,0.42450468637819283,0.6209003672366503,0.686754626681393,0.5462774556303543,0.7325076128372334,0.3265686240250516,0.3627637641699726,0.5273182707536149,0.5380103687462223,0.4677357194714382,0.3824349350832803,0.9546589165445932,0.5781079993187874,0.36042736122756547,0.9765906051113756,0.03501036493547971,0.5202727631297991,0.1545491705320271,0.8956434186207275,0.40381953709552587,0.03577661681400124,0.5773364057761637,0.8787557215956471,0.3385401738244621,0.11551907494729075,0.8263417859121975,0.6506657155754135,0.41112416258988893,0.6657593577327633,0.24903405327881012,0.5664586280308261,0.49164286682724234,0.13859383176746665,0.24354852691248108,0.04306626285952653,0.41934077954305593,0.23610964146078406,0.4892867819264586,0.41869843277522656,0.5956822545776811,0.6808343612365332,0.1914597798924188,0.06986575280907015,0.32842472172071746,0.594535678652047,0.5729799458315374,0.6439505203598566,0.327179545839283,0.441206659862302,0.4744176506936342,0.8925625372541962,0.8315993481417361,0.43277797176959676,0.782113536969704,0.9798009298961061,0.530634947374107,0.9352641425163292,0.973683200636403,0.29344718169125816,0.8727676405688083,0.4609658321311395,0.9926948139033498,0.9551264124414277,0.08640177744845035,0.6866350034369699,0.18601150016164192,0.5629855081700736,0.2189457949277802,0.03030516193680788,0.1505214996548273,0.23985337946669127,0.8553024512445745,0.6006960281744533,0.34689314348550904,0.5947025149452888,0.8559503514599003,0.28771405005485473,0.650931872916479,0.5685198801013286,0.7869129272824985,0.4480253651041175,0.4535954113506039,0.09946227678557351,0.01866870199863946,0.3228955681384408,0.30171004183085537,0.6491275822180919,0.12523041385543132,0.7325828876570777,0.921048441402645,0.6137912847259124,0.7353102427718038,0.44935941638110544,0.7915149117690772,0.19733392098855407,0.27911060334404936,0.5310924451243595,0.8355903839624145,0.5132741851179669,0.24060830456056337,0.7399384520215581,0.8310648365365586,0.12481539358274885,0.3815567034063648,0.562767748543373,0.4768876475070637,0.16617651210317064,0.4427055251987715,0.41489605989697653,0.009568920386062163,0.2761032180250962,0.8701770618550242,0.22748197664933867,0.30693701247326244,0.24122200882967337,0.2187530477743025,0.43580333035431273,0.09223650554866514,0.8363954231201698,0.5819654171383857,0.13176423705926021,0.35246340853078995,0.3102274066586376,0.7604004522138924,0.8106089283404935,0.7105584884968005,0.021780662766549663,0.9452653743389215,0.9554028955731048,0.12536105218047866,0.6976095152467761,0.2515462843087043,0.34973194337415725,0.7045459401882525,0.9192480623035171,0.19961694132436825,0.8339047978293351,0.6277417628043561,0.2217282043302461,0.6415090158503634,0.4769308360469765,0.251836612607813,0.16204490277550287,0.6396752447370845,0.580679504518655,0.7619355877689278,0.7136411960800043,0.5268251060081087,0.4612734011024181,0.4679350581876609,0.7246334312757312,0.5988986058982535,0.0763553628535556,0.8374215515616916,0.9044548768988265,0.09363342796404794,0.6640581641684951,0.675939273854466,0.20585890580315314,0.10737908282572362,0.42101995154892,0.8164651109483455,0.3422135540792274,0.0854976387501094,0.4231312137139256,0.6379660290366571,0.6768008281085983,0.5373093794003538,0.6369175394687681,0.7909407648084348,0.20096826166227222,0.2908569398579194,0.6622039107815152,0.34730201003289884,0.24998676056524605,0.4013781404381812,0.6367303873787798,0.7225007074327072,0.9696537481001648,0.24673678034661983,0.6168842685233373,0.8018589885697748,0.5501463296956927,0.3833604564931582,0.8687261309585778,0.9484071337789602,0.9623117544500468,0.9589006844346292,0.13368897160813897,0.014783521908432018,0.476746828206028,0.9074522886662947,0.018374512897777584,0.8474329345645872,0.37098977333424543,0.027218313754754364,0.9721263008079224,0.9078483807055864,0.2105400960691286,0.7869028604707674,0.9053768250742346,0.3990439904811147,0.28240835384595786,0.16553619968411737,0.6125948702871484,0.6506933524631061,0.6395778782492059,0.17825944300416197,0.942892862818065,0.11618671783568768,0.1647022758554587,0.18389829427567084,0.13300831340339891,0.5966309098706895,0.08859661729498036,0.586732741040308,0.7872832647026168,0.5479817473944121,0.06800498593143378,0.8757056266495705,0.17541407985534674,0.8675662626250088,0.5449510523351887,0.6506382792953064,0.1324052830357506,0.012691565618943024,0.08001285455026597,0.7648349810153058,0.8598797185800942,0.896285894001836,0.38496240084437827,0.08506927655477747,0.22113621875920064,0.07813166160456364,0.5102111319066057,0.6504847111350275,0.07658527716234398,0.6627695645420878,0.7069198767836143,0.4988557047647256,0.29594822103058893,0.9519824020283357,0.5777812833008553,0.7597746167645122,0.4318831433831014,0.7657018738582473,0.2997034929792378,0.7643420828299617,0.919640076854396,0.06926202970092965,0.9878496409959948,0.485935334929651,0.9206389279810515,0.6119721256881884,0.6275653864069966,0.4839959298802181,0.21162063587683444,0.43666924746232394,0.38143517820103134,0.6078581369148721,0.2970198929885496,0.007148746421236529,0.13910270769081323,0.6033463061840516,0.5361839089953644,0.008557268440026466,0.6664859083894817,0.9943778404795336,0.5156394389064958,0.414099246406644,0.6039168592987382,0.9107579640712337,0.677486818549116,0.6068706246196893,0.11694772485904903,0.3439069185930572,0.13099793411186655,0.4209064659118068,0.6253207670519904,0.3273749039190482,0.09900794495556664,0.6601246205069995,0.588435034809855,0.8292015170320067,0.22946606340397024,0.39097115502167756,0.3005155610237691,0.43465566076402884,0.4477246141323208,0.5404951882110374,0.44246076326904205,0.9312956386143121,0.38407330320852506,0.48237121161881547,0.8716961850558086,0.31774369377686185,0.19506222257498385,0.7375116092016998,0.13052616490740987,0.28165285887394975,0.3067127730172372,0.8320981166460992,0.10338248858889565,0.9973467807503865,0.7767315193023947,0.4606587022411388,0.2709539072472801,0.37038954706635396,0.04530847476491606]},"selected":{"id":"5706","type":"Selection"},"selection_policy":{"id":"5707","type":"UnionRenderers"}},"id":"5633","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"5635","subtype":"Figure","type":"Plot"},{"id":"5667","subtype":"Figure","type":"Plot"}]},"id":"5694","type":"Row"},{"attributes":{"plot":{"id":"5635","subtype":"Figure","type":"Plot"},"ticker":{"id":"5646","type":"BasicTicker"}},"id":"5649","type":"Grid"},{"attributes":{},"id":"5675","type":"LinearScale"},{"attributes":{"plot":null,"text":"Select Here"},"id":"5634","type":"Title"},{"attributes":{},"id":"5698","type":"BasicTickFormatter"},{"attributes":{},"id":"5673","type":"LinearScale"},{"attributes":{"formatter":{"id":"5702","type":"BasicTickFormatter"},"plot":{"id":"5667","subtype":"Figure","type":"Plot"},"ticker":{"id":"5678","type":"BasicTicker"}},"id":"5677","type":"LinearAxis"}],"root_ids":["5694"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"d3498466-d339-4e4c-ba1f-b3cfdc7a2085","roots":{"5694":"a66cccb3-c00c-4c7f-801d-c68b484b9b4b"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();