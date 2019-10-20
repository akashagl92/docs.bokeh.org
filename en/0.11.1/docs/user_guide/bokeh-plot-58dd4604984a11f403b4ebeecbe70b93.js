
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
  };var element = document.getElementById("6666a5f0-13d4-4385-98fa-4f4c2ac1e59f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6666a5f0-13d4-4385-98fa-4f4c2ac1e59f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"34f4ae4e-753a-4b1b-aaa2-ef84e82a2d20":{"roots":{"references":[{"attributes":{},"id":"7cbabad1-d206-4d65-9893-2ea71c64be64","type":"BasicTickFormatter"},{"attributes":{},"id":"3a5bc3a1-b951-4d9a-87e5-e11fb10746ef","type":"BasicTicker"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"2a742ce0-4232-476a-93d4-48fea4eacac1","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4db8fe35-059c-44f5-bd6d-31b7640c67c9","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"887fb708-3ce2-4a2c-b46d-90ea7b4f6e15","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"5ddd7e18-4c30-4669-94d8-78048a7e1789","type":"Range1d"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"58e8c62f-217b-44a6-b656-e94f8f7c4c2b","type":"Range1d"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"f3b259ea-9849-4dbd-98c5-71566420ceba","type":"ResetTool"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"5ffaa5c2-3046-4c01-b699-02a9eb4986be","type":"BasicTickFormatter"},"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"},"ticker":{"id":"3a5bc3a1-b951-4d9a-87e5-e11fb10746ef","type":"BasicTicker"}},"id":"02964195-4d1a-4879-94c2-a0ba583cc17b","type":"LinearAxis"},{"attributes":{},"id":"504da229-234c-45eb-83ce-7cf3dea076eb","type":"BasicTicker"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"},"ticker":{"id":"504da229-234c-45eb-83ce-7cf3dea076eb","type":"BasicTicker"}},"id":"de6461f3-e75c-4f8c-8af4-4c0fa0049431","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"},"ticker":{"id":"3a5bc3a1-b951-4d9a-87e5-e11fb10746ef","type":"BasicTicker"}},"id":"2c223b38-f00b-4e5b-a794-3eec04689fbe","type":"Grid"},{"attributes":{"overlay":{"id":"4db8fe35-059c-44f5-bd6d-31b7640c67c9","type":"BoxAnnotation"},"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"b3740129-313b-4e58-b599-a8be87fc9dfb","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"7cc693ce-7e17-46f7-9f20-4e7321577705","type":"HelpTool"},{"attributes":{},"id":"8cff5715-9cd7-4f4c-81a3-470dcf5a5d75","type":"ToolEvents"},{"attributes":{"data_source":{"id":"2246ff2b-c6bd-4de5-a961-9ee07fa1b3ed","type":"ColumnDataSource"},"glyph":{"id":"3bd5b124-e870-4d88-89f1-98ecd39253ef","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"49921e9a-7f59-4d11-b8bd-3cf14401c72f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"4d671d93-68ec-4b9c-9ab1-6247206c24f6","type":"LinearAxis"}],"left":[{"id":"02964195-4d1a-4879-94c2-a0ba583cc17b","type":"LinearAxis"}],"legend":"top_left","plot_height":400,"plot_width":400,"renderers":[{"id":"4db8fe35-059c-44f5-bd6d-31b7640c67c9","type":"BoxAnnotation"},{"id":"49921e9a-7f59-4d11-b8bd-3cf14401c72f","type":"GlyphRenderer"},{"id":"a804631f-2a28-4e49-8828-f9672fcb9ec9","type":"Legend"},{"id":"4d671d93-68ec-4b9c-9ab1-6247206c24f6","type":"LinearAxis"},{"id":"02964195-4d1a-4879-94c2-a0ba583cc17b","type":"LinearAxis"},{"id":"de6461f3-e75c-4f8c-8af4-4c0fa0049431","type":"Grid"},{"id":"2c223b38-f00b-4e5b-a794-3eec04689fbe","type":"Grid"}],"title":"HP vs DISPL","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"8cff5715-9cd7-4f4c-81a3-470dcf5a5d75","type":"ToolEvents"},"tools":[{"id":"2a742ce0-4232-476a-93d4-48fea4eacac1","type":"PanTool"},{"id":"887fb708-3ce2-4a2c-b46d-90ea7b4f6e15","type":"WheelZoomTool"},{"id":"b3740129-313b-4e58-b599-a8be87fc9dfb","type":"BoxZoomTool"},{"id":"52b15e1f-1bf1-4dda-8606-c6fbe44b0c54","type":"PreviewSaveTool"},{"id":"fd0fe9f7-c8b6-4253-93a1-6845a6840c71","type":"ResizeTool"},{"id":"f3b259ea-9849-4dbd-98c5-71566420ceba","type":"ResetTool"},{"id":"7cc693ce-7e17-46f7-9f20-4e7321577705","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"5ddd7e18-4c30-4669-94d8-78048a7e1789","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"58e8c62f-217b-44a6-b656-e94f8f7c4c2b","type":"Range1d"},"yscale":"auto"},"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"},{"attributes":{"location":"top_left","plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"a804631f-2a28-4e49-8828-f9672fcb9ec9","type":"Legend"},{"attributes":{},"id":"5ffaa5c2-3046-4c01-b699-02a9eb4986be","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"7cbabad1-d206-4d65-9893-2ea71c64be64","type":"BasicTickFormatter"},"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"},"ticker":{"id":"504da229-234c-45eb-83ce-7cf3dea076eb","type":"BasicTicker"}},"id":"4d671d93-68ec-4b9c-9ab1-6247206c24f6","type":"LinearAxis"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"fd0fe9f7-c8b6-4253-93a1-6845a6840c71","type":"ResizeTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[80.0,70.0,70.0,70.0,98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0,121.0,131.0,183.0,250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0,400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"2246ff2b-c6bd-4de5-a961-9ee07fa1b3ed","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916","subtype":"Chart","type":"Plot"}},"id":"52b15e1f-1bf1-4dda-8606-c6fbe44b0c54","type":"PreviewSaveTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3bd5b124-e870-4d88-89f1-98ecd39253ef","type":"Square"}],"root_ids":["454bfe3a-ad98-4153-ac34-f0fbc3ff4916"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"34f4ae4e-753a-4b1b-aaa2-ef84e82a2d20","elementid":"6666a5f0-13d4-4385-98fa-4f4c2ac1e59f","modelid":"454bfe3a-ad98-4153-ac34-f0fbc3ff4916"}];
          
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