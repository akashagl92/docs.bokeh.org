document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("4fc8de67-167a-499a-af8a-84d8086f2aef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4fc8de67-167a-499a-af8a-84d8086f2aef' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a4c1beb7-6280-4bb1-9c11-bb4ccc2cd94f":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"36f57792-fee7-4513-8916-19d1c2728ad4","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"44b2e19f-9edb-43d1-ac0c-2358c0d7c419","type":"BasicTickFormatter"},"plot":{"id":"c596973d-9a86-420a-8e87-531140e5cb61","type":"Plot"},"ticker":{"id":"549da9e9-c78e-40d5-9f48-88b23fef4670","type":"BasicTicker"}},"id":"6890ffbe-9348-43ab-a0ea-fc8aeb095cce","type":"LinearAxis"},{"attributes":{"plot":{"id":"c596973d-9a86-420a-8e87-531140e5cb61","type":"Plot"},"ticker":{"id":"67ca42fe-ed32-4bde-83d9-fb70dfd293ea","type":"BasicTicker"}},"id":"3a879878-0eeb-4ea2-919d-c0ac9690a90f","type":"Grid"},{"attributes":{},"id":"67ca42fe-ed32-4bde-83d9-fb70dfd293ea","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5aadfd26-16e8-4581-9c7e-1fadc0c9553b","type":"Asterisk"},{"attributes":{"data_source":{"id":"36f57792-fee7-4513-8916-19d1c2728ad4","type":"ColumnDataSource"},"glyph":{"id":"5aadfd26-16e8-4581-9c7e-1fadc0c9553b","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"464e8213-e0c4-4c7f-83e9-61d816f67d27","type":"GlyphRenderer"},{"attributes":{},"id":"44b2e19f-9edb-43d1-ac0c-2358c0d7c419","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"67d8869c-a364-41da-a90e-7b6a34a40404","type":"BasicTickFormatter"},"plot":{"id":"c596973d-9a86-420a-8e87-531140e5cb61","type":"Plot"},"ticker":{"id":"67ca42fe-ed32-4bde-83d9-fb70dfd293ea","type":"BasicTicker"}},"id":"38f271f2-93b5-411c-962d-fed2081016ee","type":"LinearAxis"},{"attributes":{"below":[{"id":"38f271f2-93b5-411c-962d-fed2081016ee","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6890ffbe-9348-43ab-a0ea-fc8aeb095cce","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"464e8213-e0c4-4c7f-83e9-61d816f67d27","type":"GlyphRenderer"},{"id":"38f271f2-93b5-411c-962d-fed2081016ee","type":"LinearAxis"},{"id":"6890ffbe-9348-43ab-a0ea-fc8aeb095cce","type":"LinearAxis"},{"id":"3a879878-0eeb-4ea2-919d-c0ac9690a90f","type":"Grid"},{"id":"cd65ba56-240a-4fcf-a1af-ef96a1c40733","type":"Grid"}],"title":null,"tool_events":{"id":"4e3d7ab4-6076-4398-b634-6a8de2e57741","type":"ToolEvents"},"toolbar":{"id":"e994be89-2ff6-48e4-9839-ddecb13b4bc1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3a106587-fac3-4626-b22c-ddafdb59329b","type":"DataRange1d"},"y_range":{"id":"4f605595-eac7-45b9-a082-0a04fbdd7950","type":"DataRange1d"}},"id":"c596973d-9a86-420a-8e87-531140e5cb61","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e994be89-2ff6-48e4-9839-ddecb13b4bc1","type":"Toolbar"},{"attributes":{"callback":null},"id":"3a106587-fac3-4626-b22c-ddafdb59329b","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4f605595-eac7-45b9-a082-0a04fbdd7950","type":"DataRange1d"},{"attributes":{},"id":"549da9e9-c78e-40d5-9f48-88b23fef4670","type":"BasicTicker"},{"attributes":{},"id":"67d8869c-a364-41da-a90e-7b6a34a40404","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c596973d-9a86-420a-8e87-531140e5cb61","type":"Plot"},"ticker":{"id":"549da9e9-c78e-40d5-9f48-88b23fef4670","type":"BasicTicker"}},"id":"cd65ba56-240a-4fcf-a1af-ef96a1c40733","type":"Grid"},{"attributes":{},"id":"4e3d7ab4-6076-4398-b634-6a8de2e57741","type":"ToolEvents"}],"root_ids":["c596973d-9a86-420a-8e87-531140e5cb61"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"a4c1beb7-6280-4bb1-9c11-bb4ccc2cd94f","elementid":"4fc8de67-167a-499a-af8a-84d8086f2aef","modelid":"c596973d-9a86-420a-8e87-531140e5cb61"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});