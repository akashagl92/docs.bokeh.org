(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("fa172660-1a6c-4549-b1ba-60433e8feb4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa172660-1a6c-4549-b1ba-60433e8feb4b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"8244ccf7-32e2-471f-b6b9-86a00014d708":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"2b7c1adf-0174-4061-a29e-cc61fc2158a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b348ad78-4a30-4cdd-9a1a-f25833a38e43","type":"BasicTicker"}},"id":"30fca02c-4f9f-4a97-8b1a-60cb61bd20d9","type":"Grid"},{"attributes":{},"id":"cf02a838-6e36-4486-93d0-98ca0bd46b79","type":"BasicTicker"},{"attributes":{},"id":"7000ab8c-dff2-420d-9dd5-f65613a42e3a","type":"ToolEvents"},{"attributes":{"data_source":{"id":"49e9791c-d010-4521-acf2-aa9c508b5289","type":"ColumnDataSource"},"glyph":{"id":"213773c4-f67a-42d1-9b79-745551455b61","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46f354ca-0ea4-4638-8a21-ecfaa05427db","type":"Line"},"selection_glyph":null},"id":"2faf6b16-83f4-413a-bd75-9ae549800b7e","type":"GlyphRenderer"},{"attributes":{},"id":"72f9d70a-85f7-4ac8-ab52-17db16d9a5f0","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"line_width":{"value":5},"x":{"field":"x"},"y":{"field":"ym"}},"id":"213773c4-f67a-42d1-9b79-745551455b61","type":"Line"},{"attributes":{"plot":{"id":"2b7c1adf-0174-4061-a29e-cc61fc2158a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf02a838-6e36-4486-93d0-98ca0bd46b79","type":"BasicTicker"}},"id":"008837cd-3112-44b4-aada-324b14724e7b","type":"Grid"},{"attributes":{"args":{"s2":{"id":"49e9791c-d010-4521-acf2-aa9c508b5289","type":"ColumnDataSource"}},"code":"\n        var inds = cb_obj.selected['1d'].indices;\n        var d = cb_obj.data;\n        var ym = 0\n\n        if (inds.length == 0) { return; }\n\n        for (i = 0; i < d['color'].length; i++) {\n            d['color'][i] = \"navy\"\n        }\n        for (i = 0; i < inds.length; i++) {\n            d['color'][inds[i]] = \"firebrick\"\n            ym += d['y'][inds[i]]\n        }\n\n        ym /= inds.length\n        s2.data['ym'] = [ym, ym]\n\n        cb_obj.change.emit();\n        s2.change.emit();\n    "},"id":"9e61a125-d093-4628-bfa8-5ec16961df5b","type":"CustomJS"},{"attributes":{},"id":"04aea6bd-7fb8-49a0-a6ea-fd16b00de2b7","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"x":{"field":"x"},"y":{"field":"ym"}},"id":"46f354ca-0ea4-4638-8a21-ecfaa05427db","type":"Line"},{"attributes":{"callback":null},"id":"6a3d8923-9c54-41a5-8166-27c8842c85c3","type":"DataRange1d"},{"attributes":{},"id":"380215d7-8061-44a7-b219-a5c5c697b0ba","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"58db9b47-7236-4218-b50b-d65be73475ed","type":"DataRange1d"},{"attributes":{},"id":"4e6f2cbe-16a9-4d1f-8dc3-43ada80139d4","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e2b662d3-48ee-4b41-b0cd-585d285f2f13","type":"LinearAxis"}],"left":[{"id":"b55d8705-b52a-4c8a-9f23-bc115817b4cf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e2b662d3-48ee-4b41-b0cd-585d285f2f13","type":"LinearAxis"},{"id":"008837cd-3112-44b4-aada-324b14724e7b","type":"Grid"},{"id":"b55d8705-b52a-4c8a-9f23-bc115817b4cf","type":"LinearAxis"},{"id":"30fca02c-4f9f-4a97-8b1a-60cb61bd20d9","type":"Grid"},{"id":"4a3929e7-8ea0-40fe-9a72-ba08df0aee22","type":"PolyAnnotation"},{"id":"12ff27a6-b951-4b22-aa64-92d34ec1cba2","type":"GlyphRenderer"},{"id":"2faf6b16-83f4-413a-bd75-9ae549800b7e","type":"GlyphRenderer"}],"title":{"id":"1a264685-5753-42a4-83f7-e6653a9cc546","type":"Title"},"tool_events":{"id":"7000ab8c-dff2-420d-9dd5-f65613a42e3a","type":"ToolEvents"},"toolbar":{"id":"d4b8652c-fb1e-4733-a78a-dd7c3b056fed","type":"Toolbar"},"x_range":{"id":"58db9b47-7236-4218-b50b-d65be73475ed","type":"DataRange1d"},"x_scale":{"id":"72f9d70a-85f7-4ac8-ab52-17db16d9a5f0","type":"LinearScale"},"y_range":{"id":"6a3d8923-9c54-41a5-8166-27c8842c85c3","type":"DataRange1d"},"y_scale":{"id":"04aea6bd-7fb8-49a0-a6ea-fd16b00de2b7","type":"LinearScale"}},"id":"2b7c1adf-0174-4061-a29e-cc61fc2158a6","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["ym","x"],"data":{"x":[0,1],"ym":[0.5,0.5]}},"id":"49e9791c-d010-4521-acf2-aa9c508b5289","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bd620f5b-fe92-40c8-a0ff-6633fcaa9b40","type":"ColumnDataSource"},"glyph":{"id":"405ccb6a-8ad8-4c0e-813e-be3d5a436365","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1c4fccc-463f-4f0e-abe8-20f7a45ee911","type":"Circle"},"selection_glyph":null},"id":"12ff27a6-b951-4b22-aa64-92d34ec1cba2","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4e6f2cbe-16a9-4d1f-8dc3-43ada80139d4","type":"BasicTickFormatter"},"plot":{"id":"2b7c1adf-0174-4061-a29e-cc61fc2158a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b348ad78-4a30-4cdd-9a1a-f25833a38e43","type":"BasicTicker"}},"id":"b55d8705-b52a-4c8a-9f23-bc115817b4cf","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c0a8145-34bd-4887-bb8b-be93bc58333d","type":"LassoSelectTool"}]},"id":"d4b8652c-fb1e-4733-a78a-dd7c3b056fed","type":"Toolbar"},{"attributes":{},"id":"b348ad78-4a30-4cdd-9a1a-f25833a38e43","type":"BasicTicker"},{"attributes":{"formatter":{"id":"380215d7-8061-44a7-b219-a5c5c697b0ba","type":"BasicTickFormatter"},"plot":{"id":"2b7c1adf-0174-4061-a29e-cc61fc2158a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf02a838-6e36-4486-93d0-98ca0bd46b79","type":"BasicTicker"}},"id":"e2b662d3-48ee-4b41-b0cd-585d285f2f13","type":"LinearAxis"},{"attributes":{"callback":{"id":"9e61a125-d093-4628-bfa8-5ec16961df5b","type":"CustomJS"},"column_names":["y","color","x"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.5400375530648376,0.21819552369619244,0.6811836280541347,0.42949904073622036,0.3600448538022304,0.5889091102449122,0.3766025571379006,0.5226152240666271,0.7733728411851027,0.5751337723718398,0.412862426850256,0.2820334157158213,0.7749642723501352,0.29617136291321444,0.5687333644586622,0.5595982327603893,0.9058974015577018,0.536082290536493,0.0803891961663824,0.5575799297320039,0.569900392372893,0.9822246494583113,0.7995480348897916,0.4822992672560218,0.8271654991097014,0.7433092247900476,0.6034819885758259,0.5876091695559128,0.9275124059212249,0.39939983487921016,0.3737859205491876,0.8653964720353163,0.16314087586737136,0.6494535337296545,0.6446471021999738,0.8579604758581441,0.6456003584498177,0.9027130685123297,0.3312518809719728,0.5359731876287545,0.4336997752456082,0.1284792469478584,0.07288539762474489,0.8331403684586924,0.19500389634383597,0.4458713542262298,0.995753649576259,0.9326160394113029,0.011349583363876592,0.11869218558114492,0.5200858572935403,0.5188158390297367,0.2685258893250573,0.01296899417108377,0.679446093079266,0.5041484291995335,0.3484201912286321,0.24438078802758734,0.13427154557788235,0.5384688141720234,0.5519607057206913,0.5407590741480426,0.3083580826585227,0.3968334871349314,0.15856761442675904,0.6833307078505059,0.9917054196809125,0.4334436901791354,0.5191602478000243,0.9278627797646419,0.8590056858603452,0.4410952132634949,0.738030265639232,0.8741407063818744,0.7900651454563253,0.6613241437251957,0.8349843058664048,0.7551424965250605,0.09012083154989448,0.3180808430397313,0.5673238934283669,0.44073944552557487,0.7281245204064714,0.4868643011548701,0.7234414285034585,0.7422424421364383,0.47357448344825304,0.6749819310880802,0.4402885769788948,0.8514008383975207,0.7914820775088396,0.7568230039352928,0.6998990213678696,0.18249740890292154,0.11473152723043745,0.12811163260464453,0.3768705375997916,0.06598222732493819,0.2601730752920348,0.08175775536990271,0.6414410093974877,0.5524123165281285,0.18984209962946785,0.5364906959444825,0.19487889249513646,0.5226942817997628,0.0980943785155749,0.8648905576969789,0.8926493132911617,0.2605559616644978,0.9129066608276407,0.7180384695703957,0.036584455790374726,0.45887995754888933,0.15981897671031065,0.3820070126688685,0.5974984187513772,0.3386260229493847,0.6478565275026147,0.9282045858896784,0.9627062331814497,0.2784839385302472,0.4225813791822941,0.6797846042989492,0.8908066192643049,0.3212980973442071,0.4954678294896384,0.5926344933495846,0.39694082547681475,0.9084444761759591,0.6148573733910677,0.6765871691293243,0.8770849143366337,0.6376648619701569,0.8486025783518211,0.058514413335628346,0.32109826501403294,0.7544069956177967,0.8035761637909846,0.6596967697948458,0.816540570233233,0.2882798699849459,0.24579423486373864,0.35644781048515617,0.8365806669284939,0.7804812106823594,0.21725567277065072,0.3999006806623523,0.7701617533550384,0.7980726198706644,0.9779276037380347,0.24790885493670312,0.6763129350764165,0.5905042734958997,0.666799060191702,0.5533485346793038,0.8548933541914823,0.054454088053375704,0.2869534204474561,0.8371980265340601,0.6452660079900118,0.026299488643891977,0.8791389984603084,0.9743951586657941,0.78656017565782,0.6981325588331734,0.7363529396748081,0.9413183633734321,0.03089378487844685,0.3619384566159859,0.28944534814193423,0.45296963747992625,0.8674298352428346,0.39453881619442566,0.28338414698621384,0.3400226405070732,0.9626284258259054,0.3498146194377272,0.12992764407172974,0.5950179061521981,0.3005467975871482,0.7441546411599116,0.6561178942749838,0.18274435676190082,0.25393640838225673,0.44604711871934366,0.14121167384767697,0.6128767124499738,0.3188443747066503,0.5178989150692019,0.991992117205041,0.10130804127856086,0.8294089010388263,0.379984160039036,0.34013199043900255,0.5613888570425866,0.5762575008656824,0.15985343234430793,0.5543672644024162,0.43339471502168914,0.21280565401099383,0.5497982527064033,0.6573650613925451,0.6568190603219162,0.3104214522452282,0.328761582256372,0.2173534244415195,0.0359133487770964,0.9190548590791264,0.7806804431935027,0.2869819072841495,0.3005725773026674,0.6918769801301036,0.785173929076997,0.20383639475371984,0.7207685834314997,0.8399435113103327,0.6179672546835742,0.4954560240736414,0.38640042930826524,0.922704710104858,0.8157775388405234,0.1728717472264636,0.48404360402387003,0.10824906899577713,0.6230533691843312,0.576512186410966,0.1780859582997396,0.14993042408776525,0.2582284251130956,0.42756648293257227,0.633730749149884,0.6712479263781067,0.0495474632475158,0.7903817852057986,0.8442596659865461,0.17758783578639648,0.7910784583801511,0.26256953019148244,0.03845526723953174,0.24577347855333498,0.05407769258934492,0.43030100579207453,0.9772866912264331,0.2887073503209038,0.44522775321209085,0.8364067235169774,0.45847063791117293,0.7492807123678118,0.5613457240568579,0.25898089571021055,0.16444952107907906,0.6279998365475337,0.5020657511087554,0.8200893088620705,0.4347334660862854,0.5221540107575401,0.8838444113478674,0.5916537266476029,0.6806084603046937,0.13506435454679533,0.5258584654354166,0.5187454500555052,0.013564835342856352,0.5958468847998042,0.36302876721496113,0.885738898730851,0.3200683634224848,0.3717397248202352,0.1833236374763031,0.8405356856011204,0.4131852162065113,0.20752807801726358,0.37257839330040454,0.8723303845774957,0.06776117801455517,0.10339851339369643,0.41817491563848275,0.7912242574779553,0.9810559864543161,0.8113759700264415,0.546649393973579,0.6789067904425069,0.3581646718036524,0.5918154243104468,0.6370137292226575,0.6667372136062604,0.1887868518748368,0.9221686016931527,0.5748837476784396,0.7136111308691698,0.9164543659517319,0.914615217859226,0.19313060996545306,0.06461380851752463,0.3718427713286738,0.48769708358505637,0.9380450786598371,0.34396259811527397,0.8363942755512894,0.15451820870555333,0.014634925942086596,0.24312328704989117,0.43213302376423646,0.14257572929443552,0.010495577979837245,0.5717012540362707,0.14393754706649242,0.4839858740615919,0.30369693157705124,0.08346295056792208,0.7718025753057177,0.4570116084434914,0.6403035452701721,0.8084523432315669,0.09138961842628213,0.6633850982050397,0.41963946352264314,0.9581632619888328,0.29874774558850337,0.49211637481005766,0.0486678816096483,0.19975882955514135,0.4663134041416198,0.388183590860114,0.2594570717446417,0.3276207648134055,0.0033180765969481607,0.279108712289049,0.30736311349609235,0.19110519461769626,0.2664097583529982,0.507132763079323,0.9624807133656557,0.9531794329033975,0.4383751155927309,0.15588764927888799,0.45628639319971787,0.9093396534399943,0.02833778380056462,0.9994926473080596,0.7471282738943329,0.09805967263004389,0.12186426157135188,0.6918248523609384,0.15102349103130086,0.9502683754938382,0.9232148283943129,0.12508945402285554,0.9326780613815409,0.46028734333248544,0.3934963864036306,0.12412201647035015,0.4316392719811638,0.7632541217518267,0.7589691519427518,0.20190285431236388,0.034063891204272334,0.8476235647356382,0.07502336216452887,0.047236303476131614,0.6014010677434243,0.4965977005957647,0.2100821649552026,0.18721107983705698,0.47675515378970046,0.9908732079182867,0.19566952197149756,0.37818580022743364,0.3350521848319803,0.6898574196914493,0.6029881372199054,0.35912453635020447,0.21089217344381783,0.1098676331231685,0.55383498463014,0.043150263358169294,0.6494228844004639,0.8736509256450643,0.7573209226771851,0.4201949530956577,0.6988585451161945,0.6807092171149185,0.3936336220404498,0.2648136334070913,0.8101817229165631,0.8717563274691302,0.8732637001547298,0.9278636014652666,0.2794216160885017,0.6315463599483785,0.31650264922743887,0.5238105348742663,0.8892134463788489,0.4213198268369762,0.6882796644592947,0.9507994726177156,0.8363520185104789,0.44307661981105606,0.6890143889238602,0.47796564870833724,0.9109979632624807,0.042776440291019124,0.9635993400046624,0.9757771506912584,0.7848375817100521,0.6251086833022836,0.05001451461044437,0.31635637735209776,0.6296290607699985,0.44831159351252414,0.068630231144443,0.7936749522612108,0.17735367746965203,0.8851932530115515,0.7195192011983176,0.12263548423614434,0.07282120735037545,0.5777383014282437,0.7685622531861181,0.23061641721611248,0.5765482849080453,0.7848945039022723,0.6582322466957123,0.42266599316600595,0.49087595745264045,0.40815924311167684,0.8385533292655066,0.28800391203462694,0.9243512940067924,0.13466361873500543,0.9911296959893021,0.41583398116494186,0.24748323955868834,0.7153247637254977,0.19806579431490556,0.010772227636191345,0.9457737951544046,0.8508306388259927,0.7716717415693386,0.22119167296305464,0.8801185547123981,0.3855071890023972,0.9868245451241864,0.8577056033566385,0.3719340007646219,0.879567668835172,0.82085278298064,0.5334137443604328,0.1847492291130307,0.2876188251624886,0.5316257039668528,0.03126103258446289,0.4697041713347384,0.6638833948711129,0.3821121123849158,0.9176637184118893,0.5577670505418274,0.0660903702036153,0.5605317212184562,0.7910342069309781,0.7233543143506008,0.793067074967467,0.31568892624542233,0.5008876938057603,0.1260134948053696,0.8072401152995582,0.962518967541967,0.32232607189900186,0.7229732112563974,0.2591015700413042,0.28684703278711854,0.897706438683017,0.2593879181583554,0.8183665715686758,0.8809910989655544,0.41214295074880125,0.3854402274841422,0.0745788615984343,0.28376713148210064,0.4002542099624843,0.516640568544855,0.7581149033406426,0.20612075321415702,0.9319358654083613,0.4137374446219434,0.15102355745816542,0.5513175799134172,0.6713161498432897,0.8685808565241472,0.020288961258904226,0.3957064641162684,0.4467193566309331,0.5772997979147143,0.6547834918042924,0.16680733218678467,0.8464680546968442,0.26972191995405537,0.5976642387515557,0.6676266358162593],"y":[0.3522052843664515,0.9885545807621094,0.31333834767698254,0.5520497489511231,0.9920589754490499,0.6451522704264885,0.3716997979791259,0.8108431779147145,0.8902042077290361,0.32194193335611343,0.4497068379078165,0.9737469953757049,0.25769488627923776,0.5891505086800497,0.5828900111868198,0.335593261498087,0.9036391641133339,0.12128706895330998,0.985909408169491,0.10729692047447215,0.9090168212543553,0.5571856724781261,0.4882259129039186,0.4745933957996912,0.08541552215747295,0.08717072804088632,0.07989250749187193,0.1424383946048826,0.9516765155452045,0.4307986619546139,0.857443126077636,0.5382312753918115,0.7636118985606557,0.9632499189490769,0.8891891348336571,0.10650328242829732,0.37543907149091305,0.27558200400658917,0.6408315964512241,0.7981637516805952,0.05503999413017591,0.6571540405833676,0.26370905640895104,0.9655342940256355,0.804184236764135,0.27553355773314525,0.013340256233327907,0.8307985743373797,0.1240047164770145,0.6725216235979965,0.45117076238046916,0.36670376778513225,0.9687542777066489,0.3240868200863707,0.08562294463824616,0.08294946426936411,0.26659128424995493,0.7687189621575096,0.7489678641263067,0.6914567535356589,0.3698142879312418,0.9833316978326202,0.3461693031553361,0.6358295948255352,0.33924865282907557,0.8256277829110232,0.5942435620260048,0.8097667711394003,0.700719112380648,0.02539195274890349,0.7748892109357062,0.808949032225537,0.07332416146247889,0.0360899081527174,0.47426741513661275,0.6559398801524078,0.3775846505498064,0.39289796998754856,0.7054438876487429,0.5939939038848134,0.5910568468308119,0.8187234399830454,0.1929949773609564,0.1228109496705635,0.0050818484214479875,0.7319392169479694,0.9726617748114924,0.8289293689034444,0.8947496463355985,0.7675706861068645,0.545001682470025,0.8176365221028514,0.8755248643356365,0.4342891541689018,0.7746984101908201,0.2167588840003074,0.2826535199428877,0.7149980362583976,0.8755070637918266,0.370849761865206,0.44065868328695945,0.6048146317738569,0.5992958451531706,0.33550060528217907,0.684058830981805,0.1131196300293511,0.5973992139256531,0.658779715751717,0.7775323593430036,0.7080984770500567,0.9720468362068562,0.02805560940375984,0.3048104971256512,0.04322331845327332,0.5417762755582645,0.7891986882701579,0.9438100147728872,0.48155719481831094,0.5434964584066848,0.07916110760753814,0.06866156404496337,0.39545605702125286,0.2231302292825883,0.859797812868562,0.6509600268866239,0.9055685099783849,0.6931234563852756,0.3273329477431256,0.5482153461663618,0.8581360309679653,0.8713788776329843,0.7360177785633034,0.041661791546453664,0.21571571516794008,0.880293453993653,0.23883761175159746,0.8839223823614804,0.9901583835659569,0.821682761625614,0.362141542414848,0.27908937489001373,0.6599096604195847,0.4683606639686222,0.039266757187493506,0.7728400915864894,0.8562309495696314,0.5209474126784144,0.47873625782114104,0.5723617557297846,0.9796316610985814,0.06534859904409573,0.831537814330266,0.5599207567205577,0.6304270914636058,0.07734497725413347,0.9092410329673226,0.4769833943685009,0.03310359928853979,0.7835188846634038,0.9670629918246727,0.1385973039517493,0.6472808366318342,0.7309834413048935,0.23830960275073942,0.5093519797982875,0.7919690829567487,0.6480313669460658,0.11518076395656007,0.7330784246125515,0.32343867293363604,0.43637591980996426,0.6093656688657743,0.5147413427406194,0.4040208289493472,0.46746607306788346,0.7988477773945325,0.02273993550148301,0.06511956527798413,0.33985526502822816,0.9316952486198258,0.2542480277902226,0.879289672872266,0.8549869423032457,0.19970293795228922,0.80877442026532,0.19238630283788394,0.31835673313070467,0.7844429413436468,0.3079739764592031,0.5108930639466988,0.2129325836400694,0.9835680066130692,0.6207853931525594,0.2335298397772384,0.9946307004611569,0.8122399022081408,0.45569785034168697,0.5252060553671305,0.14562511521016863,0.5523472246230522,0.5791859338032692,0.7361143177443659,0.0945615478683337,0.42931603371656035,0.9225212720404153,0.5083226715425007,0.4314911296850026,0.8524240684558536,0.7325509681846443,0.6849191899281883,0.27087312833906296,0.5953819070044625,0.3594498863620631,0.5283642850690792,0.49868438426123807,0.9362544047321252,0.8736688189086763,0.007643741653656888,0.5765088221584238,0.2047324741650035,0.5403439698136913,0.14238691189368935,0.9998824364070162,0.09718441479119155,0.11367932492935084,0.9778800818007709,0.34875359281682594,0.45473483073600707,0.38644801584412714,0.21417665866865487,0.6313885271915672,0.8187317666927353,0.35042516432733417,0.5768472297550518,0.6777490101210942,0.43744907398051047,0.4147393961070024,0.8676206934014211,0.8655581485192798,0.5902872336946998,0.18830036786720938,0.43594046041831036,0.4608078212762371,0.7588394024627868,0.7561931985216952,0.09711341080277391,0.7232852897331945,0.2486360369540056,0.19761601305854504,0.23701417286532622,0.8134902359856804,0.8489009609360051,0.11420297794431078,0.883112480627543,0.5083059581648042,0.4790089580328646,0.015298212084994156,0.5291314089111606,0.6802512351501624,0.5628145163388316,0.2776492295184093,0.3913353196336894,0.15760671263671833,0.27828833475523274,0.25317207823966204,0.8512389959138638,0.27392732835412625,0.18803059027712188,0.6829201217090345,0.20934579522779673,0.6738463055985678,0.07581169922529485,0.3734096349294186,0.09324761835529016,0.2644100630616357,0.06426442315282299,0.4133192752998983,0.14274510957177988,0.23544730792185775,0.6511818841160825,0.8254485007267455,0.14654935071921227,0.4873853610522775,0.5429554316562,0.9993852549576511,0.3081380173584819,0.1871003947438673,0.22875522215937316,0.4201268057950144,0.1355544524826473,0.3491610373472184,0.8540300310926858,0.20204324754177938,0.6662383635995418,0.6029935206575437,0.4326074446673931,0.014985508112297152,0.7675524229359645,0.3445331499993671,0.7422760362072164,0.7343004397620734,0.9629100401059539,0.8385238132688129,0.2313011260418114,0.4020235837729753,0.6363978805788256,0.43392650001470445,0.18100108556886818,0.8084607608911625,0.3827103654409618,0.7346567972202819,0.8791475401514227,0.5212876070427889,0.9066125398948696,0.3991898671936901,0.1885860404670252,0.7431511241279006,0.6572732679086827,0.40174505550430817,0.6250535980776811,0.1193854402757033,0.9713439857720674,0.9477582077846362,0.5338710374954769,0.9045142687059184,0.016967882792757516,0.9814909203297398,0.3888509616759408,0.5613225848348845,0.5379057657674257,0.3568601487774412,0.21423048108192688,0.6446941406365875,0.5018852640572592,0.8928456687081845,0.5223532167086709,0.5802527267524331,0.8516571972762444,0.7587738519566893,0.6932957134814971,0.7977312091414518,0.8908886605627382,0.9139058969380238,0.11369320193740218,0.3842427053676437,0.7968561806666568,0.8551788933107889,0.5868944080980935,0.5305734994413648,0.9518414152417083,0.38718936528668935,0.8759609056947502,0.6532138945488181,0.6673733373678336,0.9221135925437611,0.8168440036359433,0.014484275282208303,0.03149444374173893,0.8855658884205267,0.5618321867019211,0.09784153624366809,0.5715944118032327,0.7502559904031061,0.8702888063907657,0.019254751945819604,0.11597378251127344,0.21320142282836452,0.632735541972132,0.5631608828008794,0.34100146065255343,0.7497983380204615,0.012391802005975117,0.9066875968589705,0.24568263406944646,0.8164156058428805,0.8746291213982037,0.9284381945566044,0.43722446630249745,0.6174709575440015,0.03266786932481924,0.022403575233663098,0.19344508574961283,0.8041087079347609,0.9938626188984702,0.48775979260200364,0.20607596551828422,0.7533760923603291,0.5871689620228915,0.6090087210276968,0.7338377624685188,0.0760777609660005,0.7938720984148969,0.9975807994691751,0.5069071417736145,0.07790523192284227,0.5099782959709308,0.062479821664598534,0.13045538610953378,0.34844165213386324,0.2120736470218909,0.9077791886174642,0.7850046262998108,0.48384808936075574,0.37133458062704106,0.6619227104321488,0.3901250986714483,0.6718887944250357,0.8444497591342868,0.4310802802159678,0.9498811154412781,0.5383927494215336,0.8820011320843395,0.8911610169950347,0.6950486304322081,0.20591354970034437,0.700661765774129,0.36627708609369614,0.9196960104138958,0.9617465799361018,0.9386476009965029,0.6203736664989576,0.6923699983433385,0.8550307232192023,0.16965324346696709,0.8396564568090157,0.32496535043257535,0.9153890503582182,0.2063039925797564,0.6557975928626444,0.06899561180558067,0.855882116849782,0.8813643415156447,0.10137733658686632,0.34991518811290945,0.9561975689401826,0.6494949540275154,0.5823887885408183,0.485971313448215,0.9017778442991555,0.913386562824602,0.7664290854433425,0.12427705479214457,0.03016737058933039,0.8621462211158503,0.10570897712673899,0.774921524870433,0.7941494700550291,0.8609475959893652,0.43614236770400194,0.6979474069434108,0.9904055622018616,0.748440468553842,0.31755257548810467,0.023528670962073894,0.1997994374696681,0.6465782520723642,0.7114403380823515,0.7180417353900119,0.6875591747592282,0.2252769432575198,0.9675763329534315,0.20088353899572287,0.18245936276151875,0.7758871618128156,0.43831887832318817,0.7810010022319859,0.4820737547836953,0.46143598363775784,0.9456434335945442,0.12953101350867047,0.6321981125459795,0.41884483659294347,0.7601609602384418,0.9601843169535471,0.15394364658348347,0.7818464351782108,0.31746400181747225,0.3931982255904858,0.08854400811785557,0.22657849910316052,0.15233396642277597,0.22491194004642712,0.9432717605908293,0.9989982912603595,0.35065212034400406,0.9975308937604866,0.09703842060929846,0.2691652263483527,0.9738394783721774,0.2723278201664787,0.9720350398766427,0.39346002655740575,0.48982648128530326,0.19267002557375157,0.41832484358827116,0.6229954181481043,0.5593887150664393,0.7907696856252101,0.9675227594499146,0.08121764737655268]}},"id":"bd620f5b-fe92-40c8-a0ff-6633fcaa9b40","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"405ccb6a-8ad8-4c0e-813e-be3d5a436365","type":"Circle"},{"attributes":{"plot":null,"text":"Select Here"},"id":"1a264685-5753-42a4-83f7-e6653a9cc546","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1c4fccc-463f-4f0e-abe8-20f7a45ee911","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"4a3929e7-8ea0-40fe-9a72-ba08df0aee22","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"4a3929e7-8ea0-40fe-9a72-ba08df0aee22","type":"PolyAnnotation"},"plot":{"id":"2b7c1adf-0174-4061-a29e-cc61fc2158a6","subtype":"Figure","type":"Plot"}},"id":"6c0a8145-34bd-4887-bb8b-be93bc58333d","type":"LassoSelectTool"}],"root_ids":["2b7c1adf-0174-4061-a29e-cc61fc2158a6"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"8244ccf7-32e2-471f-b6b9-86a00014d708","elementid":"fa172660-1a6c-4549-b1ba-60433e8feb4b","modelid":"2b7c1adf-0174-4061-a29e-cc61fc2158a6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
