
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
  };var element = document.getElementById("a5f20e30-881c-4cd0-b998-c1fbbaf4ca3f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5f20e30-881c-4cd0-b998-c1fbbaf4ca3f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c253dd3e-96a3-44aa-8c66-1d19c82a9257":{"roots":{"references":[{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"633daa69-9826-4d31-af21-f982a8a4443f","type":"ResizeTool"},{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"78bc7fa3-fa04-4539-a25e-00a099285d2e","type":"WheelZoomTool"},{"attributes":{},"id":"cc6bcec0-d840-4b2d-933b-b3b614142200","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"9d031104-2094-465a-8549-b1043b096d2b","type":"BoxAnnotation"},"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"202d6131-221f-42ad-95de-9e7f25de43f3","type":"BoxZoomTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c1a5f56-455f-48fe-b653-aceb074ed0fb","type":"ImageRGBA"},{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"aa63ddef-ad1a-47dc-957a-0e09a926b8d2","type":"PreviewSaveTool"},{"attributes":{},"id":"f20235be-4bd9-4f1a-9f6e-0e66801f8653","type":"ToolEvents"},{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"334a364b-df48-4008-8d30-2551a4f8a4b9","type":"ResetTool"},{"attributes":{"formatter":{"id":"cc6bcec0-d840-4b2d-933b-b3b614142200","type":"BasicTickFormatter"},"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba83d0e0-1f8f-43e4-bd93-7dd88b1d8736","type":"BasicTicker"}},"id":"dd465a6e-fbe8-4c23-927d-6f0c9f8f81e1","type":"LinearAxis"},{"attributes":{},"id":"ba83d0e0-1f8f-43e4-bd93-7dd88b1d8736","type":"BasicTicker"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"933505ee-6c4b-4e19-94eb-74fd5ee14ebd","type":"ImageRGBA"},{"attributes":{"formatter":{"id":"9cc75cbc-c7bc-4918-80e9-1ee1f3572026","type":"BasicTickFormatter"},"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a403fa7-ed75-4ded-a2da-689855e56d35","type":"BasicTicker"}},"id":"972e12b4-d2c6-4e55-b48a-7ac35cb6487e","type":"LinearAxis"},{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"6bf707ef-3168-43d1-afea-7688ec30eb0e","type":"HelpTool"},{"attributes":{"data_source":{"id":"d3de05e5-665b-4d84-9e8e-d4afd0a9a7d9","type":"ColumnDataSource"},"glyph":{"id":"933505ee-6c4b-4e19-94eb-74fd5ee14ebd","type":"ImageRGBA"},"hover_glyph":null,"nonselection_glyph":{"id":"5c1a5f56-455f-48fe-b653-aceb074ed0fb","type":"ImageRGBA"},"selection_glyph":null},"id":"ac09d4cf-9154-4cd5-b600-78cc3cd12db8","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba83d0e0-1f8f-43e4-bd93-7dd88b1d8736","type":"BasicTicker"}},"id":"506f3524-e989-421f-8d54-53d3f1ec3a8a","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"81d567fb-7e54-4d17-a17b-664dee76a247","type":"Range1d"},{"attributes":{"below":[{"id":"972e12b4-d2c6-4e55-b48a-7ac35cb6487e","type":"LinearAxis"}],"left":[{"id":"dd465a6e-fbe8-4c23-927d-6f0c9f8f81e1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"972e12b4-d2c6-4e55-b48a-7ac35cb6487e","type":"LinearAxis"},{"id":"7f580902-813f-4559-8644-f7ea9ccfeacd","type":"Grid"},{"id":"dd465a6e-fbe8-4c23-927d-6f0c9f8f81e1","type":"LinearAxis"},{"id":"506f3524-e989-421f-8d54-53d3f1ec3a8a","type":"Grid"},{"id":"9d031104-2094-465a-8549-b1043b096d2b","type":"BoxAnnotation"},{"id":"ac09d4cf-9154-4cd5-b600-78cc3cd12db8","type":"GlyphRenderer"}],"tool_events":{"id":"f20235be-4bd9-4f1a-9f6e-0e66801f8653","type":"ToolEvents"},"tools":[{"id":"d19a8be2-da57-4ee3-811e-8f44006fe7ab","type":"PanTool"},{"id":"78bc7fa3-fa04-4539-a25e-00a099285d2e","type":"WheelZoomTool"},{"id":"202d6131-221f-42ad-95de-9e7f25de43f3","type":"BoxZoomTool"},{"id":"aa63ddef-ad1a-47dc-957a-0e09a926b8d2","type":"PreviewSaveTool"},{"id":"633daa69-9826-4d31-af21-f982a8a4443f","type":"ResizeTool"},{"id":"334a364b-df48-4008-8d30-2551a4f8a4b9","type":"ResetTool"},{"id":"6bf707ef-3168-43d1-afea-7688ec30eb0e","type":"HelpTool"}],"x_range":{"id":"881b3e13-94b3-4e0e-87c5-dc471c6fe0bc","type":"Range1d"},"y_range":{"id":"81d567fb-7e54-4d17-a17b-664dee76a247","type":"Range1d"}},"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"}},"id":"d19a8be2-da57-4ee3-811e-8f44006fe7ab","type":"PanTool"},{"attributes":{"plot":{"id":"810f05f0-767a-41e0-9b1a-066ba9ba52e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a403fa7-ed75-4ded-a2da-689855e56d35","type":"BasicTicker"}},"id":"7f580902-813f-4559-8644-f7ea9ccfeacd","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9d031104-2094-465a-8549-b1043b096d2b","type":"BoxAnnotation"},{"attributes":{},"id":"9cc75cbc-c7bc-4918-80e9-1ee1f3572026","type":"BasicTickFormatter"},{"attributes":{},"id":"0a403fa7-ed75-4ded-a2da-689855e56d35","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"881b3e13-94b3-4e0e-87c5-dc471c6fe0bc","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","dw","x","image","dh"],"data":{"dh":[10],"dw":[10],"image":[[[4278230528,4279016960,4279868928,4280720896,4281572864,4282359296,4283211264,4284063232,4284915200,4285701632,4286553600,4287405568,4288257536,4289043968,4289895936,4290747904,4291599872,4292386304,4293238272,4294090240],[4278230540,4279016972,4279868940,4280720908,4281572876,4282359308,4283211276,4284063244,4284915212,4285701644,4286553612,4287405580,4288257548,4289043980,4289895948,4290747916,4291599884,4292386316,4293238284,4294090252],[4278230553,4279016985,4279868953,4280720921,4281572889,4282359321,4283211289,4284063257,4284915225,4285701657,4286553625,4287405593,4288257561,4289043993,4289895961,4290747929,4291599897,4292386329,4293238297,4294090265],[4278230566,4279016998,4279868966,4280720934,4281572902,4282359334,4283211302,4284063270,4284915238,4285701670,4286553638,4287405606,4288257574,4289044006,4289895974,4290747942,4291599910,4292386342,4293238310,4294090278],[4278230579,4279017011,4279868979,4280720947,4281572915,4282359347,4283211315,4284063283,4284915251,4285701683,4286553651,4287405619,4288257587,4289044019,4289895987,4290747955,4291599923,4292386355,4293238323,4294090291],[4278230591,4279017023,4279868991,4280720959,4281572927,4282359359,4283211327,4284063295,4284915263,4285701695,4286553663,4287405631,4288257599,4289044031,4289895999,4290747967,4291599935,4292386367,4293238335,4294090303],[4278230604,4279017036,4279869004,4280720972,4281572940,4282359372,4283211340,4284063308,4284915276,4285701708,4286553676,4287405644,4288257612,4289044044,4289896012,4290747980,4291599948,4292386380,4293238348,4294090316],[4278230617,4279017049,4279869017,4280720985,4281572953,4282359385,4283211353,4284063321,4284915289,4285701721,4286553689,4287405657,4288257625,4289044057,4289896025,4290747993,4291599961,4292386393,4293238361,4294090329],[4278230630,4279017062,4279869030,4280720998,4281572966,4282359398,4283211366,4284063334,4284915302,4285701734,4286553702,4287405670,4288257638,4289044070,4289896038,4290748006,4291599974,4292386406,4293238374,4294090342],[4278230642,4279017074,4279869042,4280721010,4281572978,4282359410,4283211378,4284063346,4284915314,4285701746,4286553714,4287405682,4288257650,4289044082,4289896050,4290748018,4291599986,4292386418,4293238386,4294090354],[4278230655,4279017087,4279869055,4280721023,4281572991,4282359423,4283211391,4284063359,4284915327,4285701759,4286553727,4287405695,4288257663,4289044095,4289896063,4290748031,4291599999,4292386431,4293238399,4294090367],[4278230668,4279017100,4279869068,4280721036,4281573004,4282359436,4283211404,4284063372,4284915340,4285701772,4286553740,4287405708,4288257676,4289044108,4289896076,4290748044,4291600012,4292386444,4293238412,4294090380],[4278230681,4279017113,4279869081,4280721049,4281573017,4282359449,4283211417,4284063385,4284915353,4285701785,4286553753,4287405721,4288257689,4289044121,4289896089,4290748057,4291600025,4292386457,4293238425,4294090393],[4278230693,4279017125,4279869093,4280721061,4281573029,4282359461,4283211429,4284063397,4284915365,4285701797,4286553765,4287405733,4288257701,4289044133,4289896101,4290748069,4291600037,4292386469,4293238437,4294090405],[4278230706,4279017138,4279869106,4280721074,4281573042,4282359474,4283211442,4284063410,4284915378,4285701810,4286553778,4287405746,4288257714,4289044146,4289896114,4290748082,4291600050,4292386482,4293238450,4294090418],[4278230719,4279017151,4279869119,4280721087,4281573055,4282359487,4283211455,4284063423,4284915391,4285701823,4286553791,4287405759,4288257727,4289044159,4289896127,4290748095,4291600063,4292386495,4293238463,4294090431],[4278230732,4279017164,4279869132,4280721100,4281573068,4282359500,4283211468,4284063436,4284915404,4285701836,4286553804,4287405772,4288257740,4289044172,4289896140,4290748108,4291600076,4292386508,4293238476,4294090444],[4278230744,4279017176,4279869144,4280721112,4281573080,4282359512,4283211480,4284063448,4284915416,4285701848,4286553816,4287405784,4288257752,4289044184,4289896152,4290748120,4291600088,4292386520,4293238488,4294090456],[4278230757,4279017189,4279869157,4280721125,4281573093,4282359525,4283211493,4284063461,4284915429,4285701861,4286553829,4287405797,4288257765,4289044197,4289896165,4290748133,4291600101,4292386533,4293238501,4294090469],[4278230770,4279017202,4279869170,4280721138,4281573106,4282359538,4283211506,4284063474,4284915442,4285701874,4286553842,4287405810,4288257778,4289044210,4289896178,4290748146,4291600114,4292386546,4293238514,4294090482]]],"x":[0],"y":[0]}},"id":"d3de05e5-665b-4d84-9e8e-d4afd0a9a7d9","type":"ColumnDataSource"}],"root_ids":["810f05f0-767a-41e0-9b1a-066ba9ba52e6"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"c253dd3e-96a3-44aa-8c66-1d19c82a9257","elementid":"a5f20e30-881c-4cd0-b998-c1fbbaf4ca3f","modelid":"810f05f0-767a-41e0-9b1a-066ba9ba52e6"}];
          
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