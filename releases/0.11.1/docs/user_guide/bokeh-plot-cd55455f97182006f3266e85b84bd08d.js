
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
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
  };var element = document.getElementById("e4a2a816-609b-4fba-bdbf-c38da9adb907");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e4a2a816-609b-4fba-bdbf-c38da9adb907' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"814f268f-e723-4e4d-9d67-831202235f42":{"roots":{"references":[{"attributes":{"legends":[["sin(x)",[{"id":"fd421649-5b0c-4cb9-8515-670e4548f364","type":"GlyphRenderer"},{"id":"6bd7535f-5fb3-4d17-b8c4-bbe0d9aeec62","type":"GlyphRenderer"}]],["2*sin(x)",[{"id":"84c8eaf5-08fa-4cd0-a353-f9200178d221","type":"GlyphRenderer"}]],["3*sin(x)",[{"id":"0d21ce82-5756-4a77-bc98-1e0ac022345f","type":"GlyphRenderer"},{"id":"0c9994dd-e716-4a84-b82c-5442aea445dd","type":"GlyphRenderer"}]]],"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"182375c0-dfd1-4e4d-a7b4-9842de51b923","type":"Legend"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"03bd490a-a78c-46fc-99e0-bef9363a3d21","type":"Line"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"05e5a1a7-10d2-46d9-b291-d7b86199c2cb","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.12659245357374926,0.2511479871810792,0.3716624556603276,0.4861967361004687,0.5929079290546404,0.690079011482112,0.7761464642917568,0.8497254299495144,0.9096319953545183,0.9549022414440739,0.984807753012208,0.998867339183008,0.9968547759519424,0.9788024462147787,0.9450008187146685,0.8959937742913359,0.8325698546347714,0.7557495743542584,0.6667690005162916,0.5670598638627709,0.4582265217274105,0.3420201433256689,0.2203105327865408,0.09505604330418244,-0.03172793349806785,-0.15800139597335008,-0.28173255684142984,-0.40093053540661383,-0.5136773915734064,-0.6181589862206053,-0.7126941713788628,-0.7957618405308321,-0.8660254037844388,-0.9223542941045814,-0.9638421585599422,-0.9898214418809327,-0.9998741276738751,-0.9938384644612541,-0.9718115683235417,-0.9341478602651068,-0.881453363447582,-0.814575952050336,-0.7345917086575331,-0.6427876096865396,-0.5406408174555974,-0.4297949120891719,-0.31203344569848707,-0.18925124436040974,-0.06342391965656452,0.06342391965656491,0.18925124436041013,0.31203344569848745,0.42979491208917153,0.5406408174555979,0.6427876096865393,0.7345917086575334,0.8145759520503355,0.8814533634475821,0.9341478602651067,0.9718115683235418,0.9938384644612541,0.9998741276738751,0.9898214418809328,0.963842158559942,0.9223542941045816,0.8660254037844383,0.7957618405308319,0.7126941713788629,0.6181589862206056,0.5136773915734056,0.40093053540661344,0.2817325568414299,0.15800139597335056,0.03172793349806701,-0.09505604330418284,-0.22031053278654034,-0.342020143325668,-0.45822652172741085,-0.5670598638627709,-0.6667690005162913,-0.7557495743542588,-0.8325698546347716,-0.8959937742913359,-0.9450008187146683,-0.9788024462147789,-0.9968547759519424,-0.998867339183008,-0.9848077530122081,-0.9549022414440737,-0.9096319953545183,-0.8497254299495145,-0.7761464642917573,-0.6900790114821116,-0.5929079290546404,-0.486196736100469,-0.3716624556603267,-0.2511479871810788,-0.1265924535737493,-4.898587196589413e-16]}},"id":"1335d3a6-dafc-44cf-8189-1cb2591e2753","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce61dfd1-1ccc-4d22-9d61-1ac884a15297","type":"BasicTicker"}},"id":"bbc06407-81a0-42ca-9eb2-e9f6186d6f9a","type":"Grid"},{"attributes":{"callback":null},"id":"7974eb01-1e5a-4aa7-a785-161151e5d24d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4ed5a1e4-6222-472b-bc61-828b178501ff","type":"BasicTickFormatter"},"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"},"ticker":{"id":"154c44c6-5e23-4e0a-8e03-f4af041d36ae","type":"BasicTicker"}},"id":"68a6b314-ac7d-44cf-b94f-b1b0fe6169f1","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0381c746-89d1-44b8-bec1-f30f80cac692","type":"Line"},{"attributes":{"callback":null},"id":"50d95f26-bd77-46d5-aaa7-8170a6c0f085","type":"DataRange1d"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff39bd73-2a86-4e5f-bc25-acb19e3d980b","type":"Line"},{"attributes":{"overlay":{"id":"a0be5fa8-a904-469c-b748-cb4fdb5e1cce","type":"BoxAnnotation"},"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"cb1e4df1-5339-4628-a2b3-3c3e5b0a8801","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.3797773607212478,0.7534439615432377,1.1149873669809827,1.4585902083014062,1.7787237871639212,2.070237034446336,2.3284393928752705,2.549176289848543,2.728895986063555,2.8647067243322217,2.954423259036624,2.9966020175490238,2.990564327855827,2.936407338644336,2.8350024561440055,2.6879813228740077,2.4977095639043143,2.2672487230627754,2.000307001548875,1.7011795915883126,1.3746795651822317,1.0260604299770066,0.6609315983596225,0.2851681299125473,-0.09518380049420355,-0.4740041879200503,-0.8451976705242895,-1.2027916062198414,-1.5410321747202191,-1.8544769586618157,-2.1380825141365882,-2.387285521592496,-2.5980762113533165,-2.767062882313744,-2.8915264756798265,-2.969464325642798,-2.999622383021625,-2.9815153933837624,-2.915434704970625,-2.8024435807953205,-2.644360090342746,-2.443727856151008,-2.2037751259725993,-1.9283628290596186,-1.6219224523667923,-1.2893847362675157,-0.9361003370954613,-0.5677537330812292,-0.19027175896969356,0.19027175896969473,0.5677537330812303,0.9361003370954624,1.2893847362675146,1.6219224523667937,1.9283628290596178,2.2037751259726,2.4437278561510065,2.6443600903427464,2.80244358079532,2.9154347049706253,2.9815153933837624,2.999622383021625,2.9694643256427984,2.891526475679826,2.767062882313745,2.5980762113533147,2.3872855215924957,2.1380825141365887,1.8544769586618168,1.541032174720217,1.2027916062198403,0.8451976705242896,0.47400418792005167,0.09518380049420103,-0.28516812991254853,-0.660931598359621,-1.026060429977004,-1.3746795651822326,-1.7011795915883126,-2.0003070015488738,-2.2672487230627763,-2.4977095639043148,-2.6879813228740077,-2.835002456144005,-2.9364073386443366,-2.990564327855827,-2.9966020175490238,-2.9544232590366244,-2.864706724332221,-2.728895986063555,-2.5491762898485435,-2.328439392875272,-2.070237034446335,-1.7787237871639212,-1.4585902083014068,-1.11498736698098,-0.7534439615432363,-0.3797773607212479,-1.4695761589768238e-15]}},"id":"b8459275-9567-4bee-9c47-bd0e46974cd3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"08c2362f-9aab-467f-bd57-2072770ba219","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0be5fa8-a904-469c-b748-cb4fdb5e1cce","type":"BoxAnnotation"},{"attributes":{},"id":"4ed5a1e4-6222-472b-bc61-828b178501ff","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"af5e04fd-5631-4fda-9873-2b18562f86ac","type":"PreviewSaveTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"404466d8-9f2e-4977-ba42-abce9fc097d2","type":"Square"},{"attributes":{"formatter":{"id":"bb864c7e-b2aa-49e8-89c3-5d239366098f","type":"BasicTickFormatter"},"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce61dfd1-1ccc-4d22-9d61-1ac884a15297","type":"BasicTicker"}},"id":"90e67c67-f455-452b-8289-8c29b3197c5a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.3797773607212478,0.7534439615432377,1.1149873669809827,1.4585902083014062,1.7787237871639212,2.070237034446336,2.3284393928752705,2.549176289848543,2.728895986063555,2.8647067243322217,2.954423259036624,2.9966020175490238,2.990564327855827,2.936407338644336,2.8350024561440055,2.6879813228740077,2.4977095639043143,2.2672487230627754,2.000307001548875,1.7011795915883126,1.3746795651822317,1.0260604299770066,0.6609315983596225,0.2851681299125473,-0.09518380049420355,-0.4740041879200503,-0.8451976705242895,-1.2027916062198414,-1.5410321747202191,-1.8544769586618157,-2.1380825141365882,-2.387285521592496,-2.5980762113533165,-2.767062882313744,-2.8915264756798265,-2.969464325642798,-2.999622383021625,-2.9815153933837624,-2.915434704970625,-2.8024435807953205,-2.644360090342746,-2.443727856151008,-2.2037751259725993,-1.9283628290596186,-1.6219224523667923,-1.2893847362675157,-0.9361003370954613,-0.5677537330812292,-0.19027175896969356,0.19027175896969473,0.5677537330812303,0.9361003370954624,1.2893847362675146,1.6219224523667937,1.9283628290596178,2.2037751259726,2.4437278561510065,2.6443600903427464,2.80244358079532,2.9154347049706253,2.9815153933837624,2.999622383021625,2.9694643256427984,2.891526475679826,2.767062882313745,2.5980762113533147,2.3872855215924957,2.1380825141365887,1.8544769586618168,1.541032174720217,1.2027916062198403,0.8451976705242896,0.47400418792005167,0.09518380049420103,-0.28516812991254853,-0.660931598359621,-1.026060429977004,-1.3746795651822326,-1.7011795915883126,-2.0003070015488738,-2.2672487230627763,-2.4977095639043148,-2.6879813228740077,-2.835002456144005,-2.9364073386443366,-2.990564327855827,-2.9966020175490238,-2.9544232590366244,-2.864706724332221,-2.728895986063555,-2.5491762898485435,-2.328439392875272,-2.070237034446335,-1.7787237871639212,-1.4585902083014068,-1.11498736698098,-0.7534439615432363,-0.3797773607212479,-1.4695761589768238e-15]}},"id":"745f44e0-597b-4d49-8f3b-6bba28c69d43","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dda591d9-fd0e-4433-ad6c-5ca77ac10bc7","type":"Circle"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"be66c412-effe-4d36-9f7f-2a9383b2a67c","type":"ResizeTool"},{"attributes":{"data_source":{"id":"745f44e0-597b-4d49-8f3b-6bba28c69d43","type":"ColumnDataSource"},"glyph":{"id":"c763450e-a838-41d5-8170-d7ca042384fd","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"1dfca746-044b-49d8-8194-3ba22af82d58","type":"Line"},"selection_glyph":null},"id":"0c9994dd-e716-4a84-b82c-5442aea445dd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.25318490714749853,0.5022959743621584,0.7433249113206551,0.9723934722009374,1.1858158581092808,1.380158022964224,1.5522929285835136,1.6994508598990288,1.8192639907090367,1.9098044828881477,1.969615506024416,1.997734678366016,1.9937095519038848,1.9576048924295575,1.890001637429337,1.7919875485826717,1.6651397092695428,1.5114991487085168,1.3335380010325832,1.1341197277255417,0.916453043454821,0.6840402866513378,0.4406210655730816,0.19011208660836487,-0.0634558669961357,-0.31600279194670017,-0.5634651136828597,-0.8018610708132277,-1.0273547831468128,-1.2363179724412106,-1.4253883427577256,-1.5915236810616642,-1.7320508075688776,-1.8447085882091627,-1.9276843171198843,-1.9796428837618654,-1.9997482553477501,-1.9876769289225082,-1.9436231366470833,-1.8682957205302135,-1.762906726895164,-1.629151904100672,-1.4691834173150662,-1.2855752193730792,-1.0812816349111949,-0.8595898241783438,-0.6240668913969741,-0.3785024887208195,-0.12684783931312904,0.12684783931312982,0.37850248872082026,0.6240668913969749,0.8595898241783431,1.0812816349111958,1.2855752193730785,1.4691834173150669,1.629151904100671,1.7629067268951641,1.8682957205302133,1.9436231366470835,1.9876769289225082,1.9997482553477501,1.9796428837618656,1.927684317119884,1.8447085882091632,1.7320508075688765,1.5915236810616638,1.4253883427577259,1.2363179724412112,1.0273547831468113,0.8018610708132269,0.5634651136828598,0.3160027919467011,0.06345586699613402,-0.19011208660836568,-0.4406210655730807,-0.684040286651336,-0.9164530434548217,-1.1341197277255417,-1.3335380010325826,-1.5114991487085176,-1.6651397092695432,-1.7919875485826717,-1.8900016374293367,-1.9576048924295577,-1.9937095519038848,-1.997734678366016,-1.9696155060244163,-1.9098044828881473,-1.8192639907090367,-1.699450859899029,-1.5522929285835145,-1.3801580229642232,-1.1858158581092808,-0.972393472200938,-0.7433249113206534,-0.5022959743621576,-0.2531849071474986,-9.797174393178826e-16]}},"id":"3cdad254-b063-4c37-9de3-15c5486f58fa","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"},"ticker":{"id":"154c44c6-5e23-4e0a-8e03-f4af041d36ae","type":"BasicTicker"}},"id":"4d7b5ec4-c65d-4d42-ada3-4f19e82a7eb4","type":"Grid"},{"attributes":{},"id":"154c44c6-5e23-4e0a-8e03-f4af041d36ae","type":"BasicTicker"},{"attributes":{},"id":"bb864c7e-b2aa-49e8-89c3-5d239366098f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a8c2f8f-b15e-4ec6-b931-155094131f19","type":"Circle"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"9c9a657c-bbd3-436b-b3a5-436bffd7b275","type":"ResetTool"},{"attributes":{"data_source":{"id":"3b3a560c-266c-41c3-a061-ee95c06a2e62","type":"ColumnDataSource"},"glyph":{"id":"03bd490a-a78c-46fc-99e0-bef9363a3d21","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"0381c746-89d1-44b8-bec1-f30f80cac692","type":"Line"},"selection_glyph":null},"id":"6bd7535f-5fb3-4d17-b8c4-bbe0d9aeec62","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c763450e-a838-41d5-8170-d7ca042384fd","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1dfca746-044b-49d8-8194-3ba22af82d58","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"782399f1-bedc-4847-9648-f5d31fd45001","type":"Square"},{"attributes":{"data_source":{"id":"3cdad254-b063-4c37-9de3-15c5486f58fa","type":"ColumnDataSource"},"glyph":{"id":"ff39bd73-2a86-4e5f-bc25-acb19e3d980b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e2ceba0f-634e-4cd7-8e1c-8751ea3f8f5c","type":"Line"},"selection_glyph":null},"id":"84c8eaf5-08fa-4cd0-a353-f9200178d221","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2ceba0f-634e-4cd7-8e1c-8751ea3f8f5c","type":"Line"},{"attributes":{"plot":{"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}},"id":"b1f8e13e-9732-4ff6-aed5-e9ec58a2e8bd","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"b8459275-9567-4bee-9c47-bd0e46974cd3","type":"ColumnDataSource"},"glyph":{"id":"404466d8-9f2e-4977-ba42-abce9fc097d2","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"782399f1-bedc-4847-9648-f5d31fd45001","type":"Square"},"selection_glyph":null},"id":"0d21ce82-5756-4a77-bc98-1e0ac022345f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1335d3a6-dafc-44cf-8189-1cb2591e2753","type":"ColumnDataSource"},"glyph":{"id":"dda591d9-fd0e-4433-ad6c-5ca77ac10bc7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1a8c2f8f-b15e-4ec6-b931-155094131f19","type":"Circle"},"selection_glyph":null},"id":"fd421649-5b0c-4cb9-8515-670e4548f364","type":"GlyphRenderer"},{"attributes":{},"id":"1b724740-f10d-4b0a-bfc6-1691093b5949","type":"ToolEvents"},{"attributes":{},"id":"ce61dfd1-1ccc-4d22-9d61-1ac884a15297","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.12659245357374926,0.2511479871810792,0.3716624556603276,0.4861967361004687,0.5929079290546404,0.690079011482112,0.7761464642917568,0.8497254299495144,0.9096319953545183,0.9549022414440739,0.984807753012208,0.998867339183008,0.9968547759519424,0.9788024462147787,0.9450008187146685,0.8959937742913359,0.8325698546347714,0.7557495743542584,0.6667690005162916,0.5670598638627709,0.4582265217274105,0.3420201433256689,0.2203105327865408,0.09505604330418244,-0.03172793349806785,-0.15800139597335008,-0.28173255684142984,-0.40093053540661383,-0.5136773915734064,-0.6181589862206053,-0.7126941713788628,-0.7957618405308321,-0.8660254037844388,-0.9223542941045814,-0.9638421585599422,-0.9898214418809327,-0.9998741276738751,-0.9938384644612541,-0.9718115683235417,-0.9341478602651068,-0.881453363447582,-0.814575952050336,-0.7345917086575331,-0.6427876096865396,-0.5406408174555974,-0.4297949120891719,-0.31203344569848707,-0.18925124436040974,-0.06342391965656452,0.06342391965656491,0.18925124436041013,0.31203344569848745,0.42979491208917153,0.5406408174555979,0.6427876096865393,0.7345917086575334,0.8145759520503355,0.8814533634475821,0.9341478602651067,0.9718115683235418,0.9938384644612541,0.9998741276738751,0.9898214418809328,0.963842158559942,0.9223542941045816,0.8660254037844383,0.7957618405308319,0.7126941713788629,0.6181589862206056,0.5136773915734056,0.40093053540661344,0.2817325568414299,0.15800139597335056,0.03172793349806701,-0.09505604330418284,-0.22031053278654034,-0.342020143325668,-0.45822652172741085,-0.5670598638627709,-0.6667690005162913,-0.7557495743542588,-0.8325698546347716,-0.8959937742913359,-0.9450008187146683,-0.9788024462147789,-0.9968547759519424,-0.998867339183008,-0.9848077530122081,-0.9549022414440737,-0.9096319953545183,-0.8497254299495145,-0.7761464642917573,-0.6900790114821116,-0.5929079290546404,-0.486196736100469,-0.3716624556603267,-0.2511479871810788,-0.1265924535737493,-4.898587196589413e-16]}},"id":"3b3a560c-266c-41c3-a061-ee95c06a2e62","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"68a6b314-ac7d-44cf-b94f-b1b0fe6169f1","type":"LinearAxis"}],"left":[{"id":"90e67c67-f455-452b-8289-8c29b3197c5a","type":"LinearAxis"}],"renderers":[{"id":"68a6b314-ac7d-44cf-b94f-b1b0fe6169f1","type":"LinearAxis"},{"id":"4d7b5ec4-c65d-4d42-ada3-4f19e82a7eb4","type":"Grid"},{"id":"90e67c67-f455-452b-8289-8c29b3197c5a","type":"LinearAxis"},{"id":"bbc06407-81a0-42ca-9eb2-e9f6186d6f9a","type":"Grid"},{"id":"a0be5fa8-a904-469c-b748-cb4fdb5e1cce","type":"BoxAnnotation"},{"id":"182375c0-dfd1-4e4d-a7b4-9842de51b923","type":"Legend"},{"id":"fd421649-5b0c-4cb9-8515-670e4548f364","type":"GlyphRenderer"},{"id":"6bd7535f-5fb3-4d17-b8c4-bbe0d9aeec62","type":"GlyphRenderer"},{"id":"84c8eaf5-08fa-4cd0-a353-f9200178d221","type":"GlyphRenderer"},{"id":"0d21ce82-5756-4a77-bc98-1e0ac022345f","type":"GlyphRenderer"},{"id":"0c9994dd-e716-4a84-b82c-5442aea445dd","type":"GlyphRenderer"}],"tool_events":{"id":"1b724740-f10d-4b0a-bfc6-1691093b5949","type":"ToolEvents"},"tools":[{"id":"08c2362f-9aab-467f-bd57-2072770ba219","type":"PanTool"},{"id":"b1f8e13e-9732-4ff6-aed5-e9ec58a2e8bd","type":"WheelZoomTool"},{"id":"cb1e4df1-5339-4628-a2b3-3c3e5b0a8801","type":"BoxZoomTool"},{"id":"af5e04fd-5631-4fda-9873-2b18562f86ac","type":"PreviewSaveTool"},{"id":"be66c412-effe-4d36-9f7f-2a9383b2a67c","type":"ResizeTool"},{"id":"9c9a657c-bbd3-436b-b3a5-436bffd7b275","type":"ResetTool"},{"id":"05e5a1a7-10d2-46d9-b291-d7b86199c2cb","type":"HelpTool"}],"x_range":{"id":"7974eb01-1e5a-4aa7-a785-161151e5d24d","type":"DataRange1d"},"y_range":{"id":"50d95f26-bd77-46d5-aaa7-8170a6c0f085","type":"DataRange1d"}},"id":"f2225dc2-4a91-45d4-804a-e0d6be9fec35","subtype":"Figure","type":"Plot"}],"root_ids":["f2225dc2-4a91-45d4-804a-e0d6be9fec35"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"814f268f-e723-4e4d-9d67-831202235f42","elementid":"e4a2a816-609b-4fba-bdbf-c38da9adb907","modelid":"f2225dc2-4a91-45d4-804a-e0d6be9fec35"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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