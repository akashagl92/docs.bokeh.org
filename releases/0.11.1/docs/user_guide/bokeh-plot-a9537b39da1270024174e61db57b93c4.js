
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
  };var element = document.getElementById("5b6b182b-7d11-44bf-8f43-0e5fe73b720c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5b6b182b-7d11-44bf-8f43-0e5fe73b720c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f990ed28-5b62-46ca-9fcf-82f8c140d1df":{"roots":{"references":[{"attributes":{},"id":"98875cd6-e06b-4b60-9234-19006baf88b1","type":"BasicTickFormatter"},{"attributes":{},"id":"15533b26-7c55-4979-beaf-9e7a81a8cc36","type":"ToolEvents"},{"attributes":{},"id":"1c562733-c8a6-42ce-b27e-0cfe743ffe89","type":"BasicTicker"},{"attributes":{},"id":"079aa3e6-898a-4a8a-b7ba-0af2787605ee","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"798a531f-5fb1-4987-937a-8e5eee04cc78","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"5a9db14c-ef07-4770-975a-65cfb4082f30","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"39f04d14-cfe7-4f5a-a1c0-6505ef20a3ff","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"},"ticker":{"id":"1c562733-c8a6-42ce-b27e-0cfe743ffe89","type":"BasicTicker"}},"id":"c636e4b8-3115-4285-876e-441465758076","type":"Grid"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"df443a0a-3b03-4eab-9b86-f93127ad344d","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"},"ticker":{"id":"fcfd59dd-186c-4758-80c1-98dff6e6ebc9","type":"BasicTicker"}},"id":"afa7c680-55a1-4039-9de5-d1d472edeedc","type":"Grid"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"98875cd6-e06b-4b60-9234-19006baf88b1","type":"BasicTickFormatter"},"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"},"ticker":{"id":"fcfd59dd-186c-4758-80c1-98dff6e6ebc9","type":"BasicTicker"}},"id":"62f07bcf-4968-4bdb-9ba9-aeed2a93b49c","type":"LinearAxis"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"71baefa9-73c8-4c87-acaa-548890588327","type":"Range1d"},{"attributes":{"data_source":{"id":"d85d0421-ef21-4e5e-8c9a-1fccb0a8bc52","type":"ColumnDataSource"},"glyph":{"id":"5a9db14c-ef07-4770-975a-65cfb4082f30","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0c27fc8b-d299-4a45-9e9b-0bf21df40b93","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[21.5,23.7,18.0,19.0,30.5,33.5,30.0,30.5,21.5,30.0,43.1,36.1,32.8,39.4,36.1,25.1,25.5,29.0,27.2,30.9,34.2,27.2,27.4,35.7,34.1,31.9,27.5,22.3,31.5,21.6,23.9,23.8,23.2,21.1,29.5,26.0,24.5,29.0,28.0,33.0,25.0,22.0,23.0,23.0,25.0,29.0,25.0,24.0,23.0,23.0,29.0,31.0,24.0,25.0,26.0,27.0,33.5,25.5,36.0,30.0,31.5,19.0,20.0,26.5,28.0,32.0,29.5,33.0,28.0,24.5,29.0,34.5,31.8,28.4,26.0,24.0,27.0,29.0,31.0,34.0,27.0,36.0,28.0,31.6,32.9,32.4,33.7,33.0,29.9,28.1,34.4,37.0,38.0,32.0,44.0,27.0,27.0,36.0,32.0,31.0,26.0,32.0,38.0,34.0,36.0,36.0,36.0,38.0,34.7,34.1,37.7,46.6,32.2,37.0,31.3,29.8,34.3,27.9,24.3,28.0,37.2,32.1,38.1,41.5,33.5,26.4,40.8,44.3,43.4,37.0,32.3,35.1,39.0,39.1,30.0,25.8,26.6,27.2,32.4,35.0,29.8,33.8,44.6,30.0,37.3,24.0,31.0,24.0,32.0,26.0,31.0,22.0,28.0,26.0,24.0,24.0,19.0,20.0,24.0,29.0,25.0,27.0,25.0,24.0,26.0,19.0,25.0,26.0,25.0,28.0,27.0,22.0,21.0,20.0,26.0,23.0,27.0,18.0,26.0,31.0,30.0,22.0,28.0,31.0,35.0,21.0,27.0,24.0,25.0,23.0,20.0,21.0,32.0,28.0,26.0,26.0,26.0,29.0,26.0,22.0,28.0,30.0,23.0,36.4,20.3,25.4,18.0,19.0,20.6,19.4,20.5,20.2,19.2,18.0,18.0,18.0,16.0,20.5,17.0,20.8,26.8,18.0,19.0,17.0,16.2,23.5,23.0,21.5,18.0,19.8,17.7,19.0,18.1,18.6,20.2,20.6,28.8,16.0,32.7,22.4,22.5,20.0,19.0,22.0,24.0,22.0,22.0,15.0,16.0,16.0,18.0,25.0,19.0,38.0,18.0,22.0,20.0,21.0,18.0,15.0,16.0,17.0,15.0,15.0,18.0,19.0,20.0,20.0,19.1,19.0,18.0,17.5,20.5,17.6,19.0,20.2,16.5,21.0,22.0,17.5,18.5,18.0,18.5,18.0,24.2,25.4,30.7,21.0,21.0,14.0,26.6,17.0,11.0,13.0,16.0,18.0,15.0,9.0,15.0,10.0,14.0,14.0,14.0,15.0,15.0,13.0,14.0,15.0,13.0,14.0,14.0,12.0,14.0,14.0,10.0,15.0,15.0,13.0,13.0,13.0,16.0,15.0,17.5,17.0,15.5,15.0,16.0,15.5,15.5,16.0,12.0,13.0,16.5,12.0,13.0,11.0,16.0,15.0,16.0,14.0,20.0,13.0,14.0,14.0,14.0,13.0,16.0,17.5,16.0,15.5,14.5,15.0,11.0,13.0,19.9,15.5,19.2,18.5,23.0,23.9,14.0,13.0,13.0,15.0,13.0,12.0,13.0,11.0,17.0,14.0,16.9,18.2,16.5,17.6,19.4,20.2,12.0,19.2,18.1,17.5,13.0,14.0,14.0,13.0,12.0,14.0,13.0,14.0,13.0,17.0,13.0,18.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"d85d0421-ef21-4e5e-8c9a-1fccb0a8bc52","type":"ColumnDataSource"},{"attributes":{},"id":"fcfd59dd-186c-4758-80c1-98dff6e6ebc9","type":"BasicTicker"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"bd78030a-99a1-401b-95b8-9aa20131c7c9","type":"PreviewSaveTool"},{"attributes":{"overlay":{"id":"39f04d14-cfe7-4f5a-a1c0-6505ef20a3ff","type":"BoxAnnotation"},"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"6b9a434e-b04f-4ef0-afe8-70317f7a022a","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"efa14c08-7a04-4717-8a1f-dcfb81f8a470","type":"Range1d"},{"attributes":{"below":[{"id":"33fb3f0e-80fd-441a-a1e7-5177f881f60c","type":"LinearAxis"}],"left":[{"id":"62f07bcf-4968-4bdb-9ba9-aeed2a93b49c","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"39f04d14-cfe7-4f5a-a1c0-6505ef20a3ff","type":"BoxAnnotation"},{"id":"0c27fc8b-d299-4a45-9e9b-0bf21df40b93","type":"GlyphRenderer"},{"id":"33fb3f0e-80fd-441a-a1e7-5177f881f60c","type":"LinearAxis"},{"id":"62f07bcf-4968-4bdb-9ba9-aeed2a93b49c","type":"LinearAxis"},{"id":"c636e4b8-3115-4285-876e-441465758076","type":"Grid"},{"id":"afa7c680-55a1-4039-9de5-d1d472edeedc","type":"Grid"}],"title":"HP vs MPG","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"15533b26-7c55-4979-beaf-9e7a81a8cc36","type":"ToolEvents"},"tools":[{"id":"b5d0643e-23b0-40a6-a697-d3c81417c0f6","type":"PanTool"},{"id":"f408dbec-873f-461b-b07d-a7a6c00602c3","type":"WheelZoomTool"},{"id":"6b9a434e-b04f-4ef0-afe8-70317f7a022a","type":"BoxZoomTool"},{"id":"bd78030a-99a1-401b-95b8-9aa20131c7c9","type":"PreviewSaveTool"},{"id":"c085d2d7-2feb-4572-8b85-538d94ac081d","type":"ResizeTool"},{"id":"df443a0a-3b03-4eab-9b86-f93127ad344d","type":"ResetTool"},{"id":"798a531f-5fb1-4987-937a-8e5eee04cc78","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"71baefa9-73c8-4c87-acaa-548890588327","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"efa14c08-7a04-4717-8a1f-dcfb81f8a470","type":"Range1d"},"yscale":"auto"},"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"b5d0643e-23b0-40a6-a697-d3c81417c0f6","type":"PanTool"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"c085d2d7-2feb-4572-8b85-538d94ac081d","type":"ResizeTool"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"079aa3e6-898a-4a8a-b7ba-0af2787605ee","type":"BasicTickFormatter"},"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"},"ticker":{"id":"1c562733-c8a6-42ce-b27e-0cfe743ffe89","type":"BasicTicker"}},"id":"33fb3f0e-80fd-441a-a1e7-5177f881f60c","type":"LinearAxis"},{"attributes":{"plot":{"id":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85","subtype":"Chart","type":"Plot"}},"id":"f408dbec-873f-461b-b07d-a7a6c00602c3","type":"WheelZoomTool"}],"root_ids":["708eb3a3-154e-4ef8-b64f-f7d47c2ced85"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f990ed28-5b62-46ca-9fcf-82f8c140d1df","elementid":"5b6b182b-7d11-44bf-8f43-0e5fe73b720c","modelid":"708eb3a3-154e-4ef8-b64f-f7d47c2ced85"}];
          
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