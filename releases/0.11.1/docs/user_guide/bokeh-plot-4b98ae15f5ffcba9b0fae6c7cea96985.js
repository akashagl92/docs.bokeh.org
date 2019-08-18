
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
  };var element = document.getElementById("1843f4f2-48f1-46d5-b484-8bf3d4fa0087");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1843f4f2-48f1-46d5-b484-8bf3d4fa0087' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"037f21c1-9952-47a5-ba6f-02a1c1e9e223":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"59550460-b8d8-4008-a218-152b41d1a315","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"325b5265-ff1d-4d8e-8231-a6bebdb3464c","type":"HelpTool"},{"attributes":{"below":[{"id":"eff5012e-e8a1-4811-9785-6380067b3e16","type":"LinearAxis"}],"left":[{"id":"7805d1c9-2353-4d2b-baa6-f38b68b591e1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"eff5012e-e8a1-4811-9785-6380067b3e16","type":"LinearAxis"},{"id":"e3832509-9596-45eb-9240-55828d6f4b23","type":"Grid"},{"id":"7805d1c9-2353-4d2b-baa6-f38b68b591e1","type":"LinearAxis"},{"id":"eef37221-476e-447e-9d56-fc3c146a9e17","type":"Grid"},{"id":"598921b9-1148-443d-8e0f-91425dc69803","type":"BoxAnnotation"},{"id":"6f471fa7-85b6-4062-8b9a-65cc97e159f0","type":"GlyphRenderer"}],"tool_events":{"id":"ec32a608-85b9-44b5-8fd8-b92c61c9f62b","type":"ToolEvents"},"tools":[{"id":"f67bd884-de58-416f-aad7-2d592097d1da","type":"PanTool"},{"id":"38fe5402-f9bf-4e15-b1ce-d5bdee983a52","type":"WheelZoomTool"},{"id":"4731902b-4eed-416d-86b8-fe27c702c853","type":"BoxZoomTool"},{"id":"f44d3969-3896-47a1-b345-9f3383b3e03a","type":"PreviewSaveTool"},{"id":"33634e43-acf5-4376-9e6a-933588de2227","type":"ResizeTool"},{"id":"e9df1024-6850-4456-91db-66cffeee5d7a","type":"ResetTool"},{"id":"325b5265-ff1d-4d8e-8231-a6bebdb3464c","type":"HelpTool"}],"x_range":{"id":"01c3edb6-2511-4989-8b41-fe5206772b8d","type":"DataRange1d"},"y_range":{"id":"6435b19d-72df-4a53-b793-296e4fe19f41","type":"DataRange1d"}},"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"e9df1024-6850-4456-91db-66cffeee5d7a","type":"ResetTool"},{"attributes":{"formatter":{"id":"795a2816-b525-4a4f-a60f-ea0aaa1022e4","type":"BasicTickFormatter"},"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"},"ticker":{"id":"47b8aa82-1e01-4949-8920-3d88ef11deef","type":"BasicTicker"}},"id":"eff5012e-e8a1-4811-9785-6380067b3e16","type":"LinearAxis"},{"attributes":{},"id":"795a2816-b525-4a4f-a60f-ea0aaa1022e4","type":"BasicTickFormatter"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bf2b0f4-13dd-4e87-815a-d2b0d92b6319","type":"Wedge"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"598921b9-1148-443d-8e0f-91425dc69803","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"59550460-b8d8-4008-a218-152b41d1a315","type":"ColumnDataSource"},"glyph":{"id":"781c3f07-b14b-4c86-9ce9-58c562c79de0","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"6bf2b0f4-13dd-4e87-815a-d2b0d92b6319","type":"Wedge"},"selection_glyph":null},"id":"6f471fa7-85b6-4062-8b9a-65cc97e159f0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"38fe5402-f9bf-4e15-b1ce-d5bdee983a52","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"598921b9-1148-443d-8e0f-91425dc69803","type":"BoxAnnotation"},"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"4731902b-4eed-416d-86b8-fe27c702c853","type":"BoxZoomTool"},{"attributes":{},"id":"47b8aa82-1e01-4949-8920-3d88ef11deef","type":"BasicTicker"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"33634e43-acf5-4376-9e6a-933588de2227","type":"ResizeTool"},{"attributes":{},"id":"b6917917-b923-48f1-ae3b-8771a1bbec65","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"f44d3969-3896-47a1-b345-9f3383b3e03a","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"01c3edb6-2511-4989-8b41-fe5206772b8d","type":"DataRange1d"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"},"ticker":{"id":"47b8aa82-1e01-4949-8920-3d88ef11deef","type":"BasicTicker"}},"id":"e3832509-9596-45eb-9240-55828d6f4b23","type":"Grid"},{"attributes":{"callback":null},"id":"6435b19d-72df-4a53-b793-296e4fe19f41","type":"DataRange1d"},{"attributes":{},"id":"2b73cf7c-2bdd-43bb-95fb-1326bc56de97","type":"BasicTicker"},{"attributes":{"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"}},"id":"f67bd884-de58-416f-aad7-2d592097d1da","type":"PanTool"},{"attributes":{"formatter":{"id":"b6917917-b923-48f1-ae3b-8771a1bbec65","type":"BasicTickFormatter"},"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b73cf7c-2bdd-43bb-95fb-1326bc56de97","type":"BasicTicker"}},"id":"7805d1c9-2353-4d2b-baa6-f38b68b591e1","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"dd27888d-78b3-4214-927a-dd054cd2838e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b73cf7c-2bdd-43bb-95fb-1326bc56de97","type":"BasicTicker"}},"id":"eef37221-476e-447e-9d56-fc3c146a9e17","type":"Grid"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"781c3f07-b14b-4c86-9ce9-58c562c79de0","type":"Wedge"},{"attributes":{},"id":"ec32a608-85b9-44b5-8fd8-b92c61c9f62b","type":"ToolEvents"}],"root_ids":["dd27888d-78b3-4214-927a-dd054cd2838e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"037f21c1-9952-47a5-ba6f-02a1c1e9e223","elementid":"1843f4f2-48f1-46d5-b484-8bf3d4fa0087","modelid":"dd27888d-78b3-4214-927a-dd054cd2838e"}];
          
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