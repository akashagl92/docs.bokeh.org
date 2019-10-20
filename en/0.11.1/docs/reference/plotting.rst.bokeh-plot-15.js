
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
  };var element = document.getElementById("97948636-9fed-488e-b547-8c7341fa24c5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '97948636-9fed-488e-b547-8c7341fa24c5' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"cdeb8684-49a0-4e3d-87cb-99029de9ec3a":{"roots":{"references":[{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"69d3d13d-8f9c-4473-92d2-84b3d26463fd","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"},"ticker":{"id":"da960737-156a-4964-9374-7ce7ca371104","type":"BasicTicker"}},"id":"d5f49db3-a14d-4eb3-9a5f-a4a3622c5c62","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8d4d0f1-ed86-42bd-8ea1-7e76fb7d455e","type":"Ray"},{"attributes":{"formatter":{"id":"c5cf67f4-a145-458b-b14f-e71b1fedfac4","type":"BasicTickFormatter"},"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"},"ticker":{"id":"23ba31cc-70a9-485a-bc55-fb4d0f207705","type":"BasicTicker"}},"id":"1923bc53-1159-41b6-825a-5dd23040f7bf","type":"LinearAxis"},{"attributes":{"below":[{"id":"1923bc53-1159-41b6-825a-5dd23040f7bf","type":"LinearAxis"}],"left":[{"id":"a1636fcf-e39f-4a4e-a4f0-8b268048ddb5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1923bc53-1159-41b6-825a-5dd23040f7bf","type":"LinearAxis"},{"id":"aa691d31-8c3a-4cd2-95b1-98991d7d5d2d","type":"Grid"},{"id":"a1636fcf-e39f-4a4e-a4f0-8b268048ddb5","type":"LinearAxis"},{"id":"d5f49db3-a14d-4eb3-9a5f-a4a3622c5c62","type":"Grid"},{"id":"939ef4dd-9710-4333-9c1b-be0a0b250f2e","type":"BoxAnnotation"},{"id":"e81ce87f-83ed-4ac0-a6d6-e81cddcc4971","type":"GlyphRenderer"}],"tool_events":{"id":"79e7185f-0716-4498-80e0-063263c32164","type":"ToolEvents"},"tools":[{"id":"69d3d13d-8f9c-4473-92d2-84b3d26463fd","type":"PanTool"},{"id":"a6a6b02b-432a-4533-9e06-19db0eacb144","type":"WheelZoomTool"},{"id":"c35f2be0-595c-4629-a9d9-a581f9a44845","type":"BoxZoomTool"},{"id":"b031c7a9-d28a-4f0c-b187-8d3b7dc85def","type":"PreviewSaveTool"},{"id":"c45b82aa-7278-4592-a20c-e84fc33d9458","type":"ResizeTool"},{"id":"6f2db855-52ee-4d86-b332-9422790990ff","type":"ResetTool"},{"id":"b447cc48-9fca-4cf3-97d9-274b559b11a1","type":"HelpTool"}],"x_range":{"id":"786364af-fced-4fba-a77c-c76cdcf32eac","type":"DataRange1d"},"y_range":{"id":"2b8de6f4-3f1f-4865-948a-41f0298edfcf","type":"DataRange1d"}},"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"79e7185f-0716-4498-80e0-063263c32164","type":"ToolEvents"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"eba7f6dc-a607-4f69-8559-1fcdf6071ac6","type":"Ray"},{"attributes":{},"id":"da960737-156a-4964-9374-7ce7ca371104","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2b8de6f4-3f1f-4865-948a-41f0298edfcf","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"939ef4dd-9710-4333-9c1b-be0a0b250f2e","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"26bfe474-5b81-47a8-b3f9-796bfb56acea","type":"ColumnDataSource"},"glyph":{"id":"eba7f6dc-a607-4f69-8559-1fcdf6071ac6","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"b8d4d0f1-ed86-42bd-8ea1-7e76fb7d455e","type":"Ray"},"selection_glyph":null},"id":"e81ce87f-83ed-4ac0-a6d6-e81cddcc4971","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"6f2db855-52ee-4d86-b332-9422790990ff","type":"ResetTool"},{"attributes":{"callback":null},"id":"786364af-fced-4fba-a77c-c76cdcf32eac","type":"DataRange1d"},{"attributes":{},"id":"c5cf67f4-a145-458b-b14f-e71b1fedfac4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"a6a6b02b-432a-4533-9e06-19db0eacb144","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"},"ticker":{"id":"23ba31cc-70a9-485a-bc55-fb4d0f207705","type":"BasicTicker"}},"id":"aa691d31-8c3a-4cd2-95b1-98991d7d5d2d","type":"Grid"},{"attributes":{"formatter":{"id":"5cb1d86d-948b-4f0a-a6f0-e75f2fb94eae","type":"BasicTickFormatter"},"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"},"ticker":{"id":"da960737-156a-4964-9374-7ce7ca371104","type":"BasicTicker"}},"id":"a1636fcf-e39f-4a4e-a4f0-8b268048ddb5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"26bfe474-5b81-47a8-b3f9-796bfb56acea","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"b447cc48-9fca-4cf3-97d9-274b559b11a1","type":"HelpTool"},{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"c45b82aa-7278-4592-a20c-e84fc33d9458","type":"ResizeTool"},{"attributes":{},"id":"5cb1d86d-948b-4f0a-a6f0-e75f2fb94eae","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"b031c7a9-d28a-4f0c-b187-8d3b7dc85def","type":"PreviewSaveTool"},{"attributes":{"overlay":{"id":"939ef4dd-9710-4333-9c1b-be0a0b250f2e","type":"BoxAnnotation"},"plot":{"id":"91fa14d0-b53c-4fed-8907-16d8b0385320","subtype":"Figure","type":"Plot"}},"id":"c35f2be0-595c-4629-a9d9-a581f9a44845","type":"BoxZoomTool"},{"attributes":{},"id":"23ba31cc-70a9-485a-bc55-fb4d0f207705","type":"BasicTicker"}],"root_ids":["91fa14d0-b53c-4fed-8907-16d8b0385320"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"cdeb8684-49a0-4e3d-87cb-99029de9ec3a","elementid":"97948636-9fed-488e-b547-8c7341fa24c5","modelid":"91fa14d0-b53c-4fed-8907-16d8b0385320"}];
          
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