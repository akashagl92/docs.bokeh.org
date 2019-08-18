
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
  };var element = document.getElementById("765dd63b-6c75-4bec-b9cc-d9de34d53250");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '765dd63b-6c75-4bec-b9cc-d9de34d53250' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6e2cd3a0-8990-4aef-9dd1-0145f4a8c23d":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":"white"},"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd0b3c9c-d95d-48a9-9bc0-4962a7aed4b1","type":"BasicTicker"}},"id":"37354f22-005e-45f0-b36a-b81bbed009fc","type":"Grid"},{"attributes":{"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"}},"id":"768ff97f-fe01-4ce6-b387-1810731f00d7","type":"ResetTool"},{"attributes":{},"id":"176767a0-6ce7-4c7c-89b7-df578f0cec89","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["text","y","x"],"data":{"text":["H","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb"],"x":[1.00794,6.941,9.012182,10.811,12.0107,14.0067,15.9994,18.9984032,20.1797,22.98976928,24.305,26.9815386,28.0855,30.973762,32.065,35.453,39.948,39.0983,40.078,44.955912,47.867,50.9415,51.9961,54.938045,55.845,58.933195,58.6934,63.546,65.38,69.723,72.64,74.9216,78.96,79.904,83.798,85.4678,87.62,88.90585,91.224,92.90638,95.96,98.0,101.07,102.9055,106.42,107.8682,112.411,114.818,118.71,121.76,127.6,126.90447,131.293,132.9054519,137.327,138.90547,140.116,140.90765,144.242,145.0,150.36,151.964,157.25,158.92535,162.5,164.93032,167.259,168.93421,173.054,174.9668,178.49,180.94788,183.84,186.207,190.23,192.217,195.084,196.966569,200.59,204.3833,207.2],"y":[0.30008989999999997,0.8400000000000001,2.15,2.76,2.5599999999999996,0.3,0.3,0.3,0.3,1.27,2.04,3.0,2.63,2.12,2.26,0.3,0.3,1.16,1.85,3.29,4.81,6.41,7.4399999999999995,7.77,8.17,9.200000000000001,9.21,9.22,7.4399999999999995,6.2,5.62,6.03,5.12,3.42,0.3,1.83,2.9299999999999997,4.77,6.81,8.870000000000001,10.58,11.8,12.67,12.75,12.32,10.790000000000001,8.950000000000001,7.609999999999999,7.609999999999999,7.0,6.54,5.24,0.31,2.1799999999999997,3.8099999999999996,6.45,6.99,6.9399999999999995,7.31,7.56,7.6499999999999995,5.54,8.200000000000001,8.520000000000001,8.850000000000001,9.100000000000001,9.370000000000001,9.620000000000001,6.87,10.14,13.610000000000001,16.95,19.55,21.32,22.89,22.86,21.39,19.6,13.83,12.15,11.64]}},"id":"fc771e09-da15-4835-8179-837d1350bb0b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"791e3fbe-6c1a-4d21-a5a2-ccb0a866b015","type":"Circle"},{"attributes":{"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"}},"id":"d0f5f505-d842-4419-a27c-9c2911622a54","type":"PreviewSaveTool"},{"attributes":{},"id":"fd0b3c9c-d95d-48a9-9bc0-4962a7aed4b1","type":"BasicTicker"},{"attributes":{},"id":"e50edc2b-0dd1-4c2a-b611-a63e0274ac03","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3483850e-12a4-4689-95f3-670b3ed4a23f","type":"DataRange1d"},{"attributes":{"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"}},"id":"9a257f04-c3d4-4922-8887-47125db90215","type":"ResizeTool"},{"attributes":{},"id":"cb03f7b6-4b61-4525-adcd-e35e6e8c1b13","type":"ToolEvents"},{"attributes":{"axis_label":"atomic weight (amu)","formatter":{"id":"5f1678b3-2001-4497-bdb6-1261b8e40cb2","type":"BasicTickFormatter"},"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd0b3c9c-d95d-48a9-9bc0-4962a7aed4b1","type":"BasicTicker"}},"id":"93e514d8-57f4-4d6a-abe6-f5dc20fcc52b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9935aa71-61a0-40ed-8615-462143562ed6","type":"ColumnDataSource"},"glyph":{"id":"791e3fbe-6c1a-4d21-a5a2-ccb0a866b015","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"690a2fd9-120c-44aa-bff7-75a06765ef93","type":"Circle"},"selection_glyph":null},"id":"3f737574-3da3-4458-b231-c43f712e5f87","type":"GlyphRenderer"},{"attributes":{"axis_label":"density (g/cm^3)","formatter":{"id":"176767a0-6ce7-4c7c-89b7-df578f0cec89","type":"BasicTickFormatter"},"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"},"ticker":{"id":"e50edc2b-0dd1-4c2a-b611-a63e0274ac03","type":"BasicTicker"}},"id":"d500eaab-2478-4b2f-a6a3-42182d64e9c4","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","fill_color"],"data":{"fill_color":["#053061","#2166ac","#d1e5f0","#fddbc7","#67001f","#053061","#053061","#053061","#053061","#053061","#4393c3","#4393c3","#d1e5f0","#053061","#053061","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f7f7f7","#f7f7f7","#92c5de","#d1e5f0","#d1e5f0","#d1e5f0","#92c5de","#2166ac","#053061","#92c5de","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f4a582","#f4a582","#fddbc7","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#2166ac","#2166ac","#2166ac","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#92c5de","#4393c3","#92c5de","#92c5de","#92c5de","#92c5de","#4393c3","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#4393c3","#f7f7f7","#fddbc7","#d6604d","#b2182b","#b2182b","#d6604d","#f4a582","#f7f7f7","#92c5de","#053061","#2166ac","#2166ac"],"x":[1.00794,6.941,9.012182,10.811,12.0107,14.0067,15.9994,18.9984032,20.1797,22.98976928,24.305,26.9815386,28.0855,30.973762,32.065,35.453,39.948,39.0983,40.078,44.955912,47.867,50.9415,51.9961,54.938045,55.845,58.933195,58.6934,63.546,65.38,69.723,72.64,74.9216,78.96,79.904,83.798,85.4678,87.62,88.90585,91.224,92.90638,95.96,98.0,101.07,102.9055,106.42,107.8682,112.411,114.818,118.71,121.76,127.6,126.90447,131.293,132.9054519,137.327,138.90547,140.116,140.90765,144.242,145.0,150.36,151.964,157.25,158.92535,162.5,164.93032,167.259,168.93421,173.054,174.9668,178.49,180.94788,183.84,186.207,190.23,192.217,195.084,196.966569,200.59,204.3833,207.2],"y":[8.99e-05,0.54,1.85,2.46,2.26,0.0,0.0,0.0,0.0,0.97,1.74,2.7,2.33,1.82,1.96,0.0,0.0,0.86,1.55,2.99,4.51,6.11,7.14,7.47,7.87,8.9,8.91,8.92,7.14,5.9,5.32,5.73,4.82,3.12,0.0,1.53,2.63,4.47,6.51,8.57,10.28,11.5,12.37,12.45,12.02,10.49,8.65,7.31,7.31,6.7,6.24,4.94,0.01,1.88,3.51,6.15,6.69,6.64,7.01,7.26,7.35,5.24,7.9,8.22,8.55,8.8,9.07,9.32,6.57,9.84,13.31,16.65,19.25,21.02,22.59,22.56,21.09,19.3,13.53,11.85,11.34]}},"id":"9935aa71-61a0-40ed-8615-462143562ed6","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"},"ticker":{"id":"e50edc2b-0dd1-4c2a-b611-a63e0274ac03","type":"BasicTicker"}},"id":"f647db30-3109-4baf-ba62-ba148101e5cf","type":"Grid"},{"attributes":{"data_source":{"id":"fc771e09-da15-4835-8179-837d1350bb0b","type":"ColumnDataSource"},"glyph":{"id":"349ab96a-6074-4114-b82b-90dd83e2843b","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"bd4e4b44-7f4d-423c-a5b9-6eafdf302164","type":"Text"},"selection_glyph":null},"id":"64147c08-d8e6-4ab2-b16b-1fcaec1e7309","type":"GlyphRenderer"},{"attributes":{},"id":"5f1678b3-2001-4497-bdb6-1261b8e40cb2","type":"BasicTickFormatter"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd4e4b44-7f4d-423c-a5b9-6eafdf302164","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"690a2fd9-120c-44aa-bff7-75a06765ef93","type":"Circle"},{"attributes":{"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"}},"id":"9bd2aec1-e746-464b-9a7b-0bf7782f2a22","type":"PanTool"},{"attributes":{"background_fill_color":{"value":"#cccccc"},"below":[{"id":"93e514d8-57f4-4d6a-abe6-f5dc20fcc52b","type":"LinearAxis"}],"left":[{"id":"d500eaab-2478-4b2f-a6a3-42182d64e9c4","type":"LinearAxis"}],"logo":"grey","plot_width":1200,"renderers":[{"id":"93e514d8-57f4-4d6a-abe6-f5dc20fcc52b","type":"LinearAxis"},{"id":"37354f22-005e-45f0-b36a-b81bbed009fc","type":"Grid"},{"id":"d500eaab-2478-4b2f-a6a3-42182d64e9c4","type":"LinearAxis"},{"id":"f647db30-3109-4baf-ba62-ba148101e5cf","type":"Grid"},{"id":"03d2c5af-c08c-48c4-984a-314b701b7217","type":"BoxAnnotation"},{"id":"3f737574-3da3-4458-b231-c43f712e5f87","type":"GlyphRenderer"},{"id":"64147c08-d8e6-4ab2-b16b-1fcaec1e7309","type":"GlyphRenderer"}],"title":"Density vs Atomic Weight of Elements (colored by melting point)","tool_events":{"id":"cb03f7b6-4b61-4525-adcd-e35e6e8c1b13","type":"ToolEvents"},"toolbar_location":"left","tools":[{"id":"9bd2aec1-e746-464b-9a7b-0bf7782f2a22","type":"PanTool"},{"id":"69f804ce-056a-4fa5-808c-4a5b7295bf89","type":"WheelZoomTool"},{"id":"df6b20e0-d945-45aa-a2d5-e4c62c3055c9","type":"BoxZoomTool"},{"id":"768ff97f-fe01-4ce6-b387-1810731f00d7","type":"ResetTool"},{"id":"9a257f04-c3d4-4922-8887-47125db90215","type":"ResizeTool"},{"id":"d0f5f505-d842-4419-a27c-9c2911622a54","type":"PreviewSaveTool"}],"x_range":{"id":"542089b2-b853-433a-8e80-f55aa8956122","type":"DataRange1d"},"y_range":{"id":"3483850e-12a4-4689-95f3-670b3ed4a23f","type":"DataRange1d"}},"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"03d2c5af-c08c-48c4-984a-314b701b7217","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"03d2c5af-c08c-48c4-984a-314b701b7217","type":"BoxAnnotation"},"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"}},"id":"df6b20e0-d945-45aa-a2d5-e4c62c3055c9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455","subtype":"Figure","type":"Plot"}},"id":"69f804ce-056a-4fa5-808c-4a5b7295bf89","type":"WheelZoomTool"},{"attributes":{"text_align":"center","text_color":{"value":"#333333"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"349ab96a-6074-4114-b82b-90dd83e2843b","type":"Text"},{"attributes":{"callback":null},"id":"542089b2-b853-433a-8e80-f55aa8956122","type":"DataRange1d"}],"root_ids":["eb17d0ba-af5e-47dc-93b8-e9ee4dc67455"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"6e2cd3a0-8990-4aef-9dd1-0145f4a8c23d","elementid":"765dd63b-6c75-4bec-b9cc-d9de34d53250","modelid":"eb17d0ba-af5e-47dc-93b8-e9ee4dc67455"}];
          
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