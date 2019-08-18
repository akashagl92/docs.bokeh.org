document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("b92f5cc9-9254-4a01-85f3-e84f5b6172ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b92f5cc9-9254-4a01-85f3-e84f5b6172ed' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f2da2926-d69f-4a84-9668-f727132e3f8b":{"roots":{"references":[{"attributes":{"callback":null},"id":"65bc1677-75fc-4d64-a60b-4422cfec3676","type":"DataRange1d"},{"attributes":{},"id":"be8574b1-eedc-43aa-a56f-65923fa334ed","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"736c1b28-24bb-4eab-8170-4ceeaf6cd40b","type":"Asterisk"},{"attributes":{},"id":"359a51a8-5dfa-40e7-97a0-3119b2ede7b6","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d09ec6c3-2248-4f36-8a5d-121dcbf9f1e9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"be8574b1-eedc-43aa-a56f-65923fa334ed","type":"BasicTickFormatter"},"plot":{"id":"fb615caa-45f8-48ca-8582-c67a2d3660be","type":"Plot"},"ticker":{"id":"359a51a8-5dfa-40e7-97a0-3119b2ede7b6","type":"BasicTicker"}},"id":"2b6aaced-26e0-464e-a8d4-3bf6dcb8382a","type":"LinearAxis"},{"attributes":{},"id":"0e4edb73-18f1-4984-b0f8-af97c7a04db5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2da0e031-2cd7-41e9-83f5-bf8c478b5e9f","type":"BasicTickFormatter"},"plot":{"id":"fb615caa-45f8-48ca-8582-c67a2d3660be","type":"Plot"},"ticker":{"id":"0e4edb73-18f1-4984-b0f8-af97c7a04db5","type":"BasicTicker"}},"id":"6529ae82-8fa2-4405-bb4f-94ec75e04f25","type":"LinearAxis"},{"attributes":{"below":[{"id":"2b6aaced-26e0-464e-a8d4-3bf6dcb8382a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6529ae82-8fa2-4405-bb4f-94ec75e04f25","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"32415171-0d02-420f-9d08-5f8adf19f86b","type":"GlyphRenderer"},{"id":"2b6aaced-26e0-464e-a8d4-3bf6dcb8382a","type":"LinearAxis"},{"id":"6529ae82-8fa2-4405-bb4f-94ec75e04f25","type":"LinearAxis"},{"id":"83c4994c-c303-4e80-aba3-7dca89669e82","type":"Grid"},{"id":"472137f1-f220-4001-b6bb-7be5f3f7cfc3","type":"Grid"}],"title":null,"tool_events":{"id":"8f6bb644-8a04-489b-8b1d-687d20c8acb4","type":"ToolEvents"},"toolbar":{"id":"c1d36071-1bdf-4336-89f9-de80e2ceb7f7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"65bc1677-75fc-4d64-a60b-4422cfec3676","type":"DataRange1d"},"y_range":{"id":"d09ec6c3-2248-4f36-8a5d-121dcbf9f1e9","type":"DataRange1d"}},"id":"fb615caa-45f8-48ca-8582-c67a2d3660be","type":"Plot"},{"attributes":{"plot":{"id":"fb615caa-45f8-48ca-8582-c67a2d3660be","type":"Plot"},"ticker":{"id":"359a51a8-5dfa-40e7-97a0-3119b2ede7b6","type":"BasicTicker"}},"id":"83c4994c-c303-4e80-aba3-7dca89669e82","type":"Grid"},{"attributes":{},"id":"8f6bb644-8a04-489b-8b1d-687d20c8acb4","type":"ToolEvents"},{"attributes":{"data_source":{"id":"b5b2b317-0e79-4ba9-91d1-6d26f37374fe","type":"ColumnDataSource"},"glyph":{"id":"736c1b28-24bb-4eab-8170-4ceeaf6cd40b","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32415171-0d02-420f-9d08-5f8adf19f86b","type":"GlyphRenderer"},{"attributes":{},"id":"2da0e031-2cd7-41e9-83f5-bf8c478b5e9f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"b5b2b317-0e79-4ba9-91d1-6d26f37374fe","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"fb615caa-45f8-48ca-8582-c67a2d3660be","type":"Plot"},"ticker":{"id":"0e4edb73-18f1-4984-b0f8-af97c7a04db5","type":"BasicTicker"}},"id":"472137f1-f220-4001-b6bb-7be5f3f7cfc3","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c1d36071-1bdf-4336-89f9-de80e2ceb7f7","type":"Toolbar"}],"root_ids":["fb615caa-45f8-48ca-8582-c67a2d3660be"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f2da2926-d69f-4a84-9668-f727132e3f8b","elementid":"b92f5cc9-9254-4a01-85f3-e84f5b6172ed","modelid":"fb615caa-45f8-48ca-8582-c67a2d3660be"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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