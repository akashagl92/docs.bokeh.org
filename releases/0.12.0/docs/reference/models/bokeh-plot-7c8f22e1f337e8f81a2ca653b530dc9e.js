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
      };var element = document.getElementById("e986539b-c645-474f-a22c-42e3689b06c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e986539b-c645-474f-a22c-42e3689b06c7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"995a6762-cfc9-4de5-91df-2560e1147971":{"roots":{"references":[{"attributes":{},"id":"9ff74fcb-1737-4c8a-801a-8417ec8861b4","type":"BasicTickFormatter"},{"attributes":{},"id":"2c7abe30-c9a6-441c-a6bd-5fb1694646cf","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"371875e1-da55-4224-adb8-f06583abd0d2","type":"Ray"},{"attributes":{"dimension":1,"plot":{"id":"cfd111c6-ca85-4eca-b426-4386a32869c1","type":"Plot"},"ticker":{"id":"cb554eb0-edba-4fbc-8e5d-cd7c7946371c","type":"BasicTicker"}},"id":"04355110-30d6-45d6-bfba-59638ee46ba8","type":"Grid"},{"attributes":{"plot":{"id":"cfd111c6-ca85-4eca-b426-4386a32869c1","type":"Plot"},"ticker":{"id":"3baabd06-b027-49a1-a1b3-78df3c088cc3","type":"BasicTicker"}},"id":"5151a5d4-11ed-49f8-a748-360e2e82d021","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"94e248cb-8214-4cf6-b0c3-160fcb3e758e","type":"Toolbar"},{"attributes":{"formatter":{"id":"9ff74fcb-1737-4c8a-801a-8417ec8861b4","type":"BasicTickFormatter"},"plot":{"id":"cfd111c6-ca85-4eca-b426-4386a32869c1","type":"Plot"},"ticker":{"id":"3baabd06-b027-49a1-a1b3-78df3c088cc3","type":"BasicTicker"}},"id":"d3979c5b-4c04-4db2-83f2-afbf781aac73","type":"LinearAxis"},{"attributes":{"below":[{"id":"d3979c5b-4c04-4db2-83f2-afbf781aac73","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"145548c1-c75f-42de-9ce7-d9a636aa17b3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f7230da4-9e81-44ca-9183-0c7769d37c4e","type":"GlyphRenderer"},{"id":"d3979c5b-4c04-4db2-83f2-afbf781aac73","type":"LinearAxis"},{"id":"145548c1-c75f-42de-9ce7-d9a636aa17b3","type":"LinearAxis"},{"id":"5151a5d4-11ed-49f8-a748-360e2e82d021","type":"Grid"},{"id":"04355110-30d6-45d6-bfba-59638ee46ba8","type":"Grid"}],"title":null,"tool_events":{"id":"c1da75c6-9f1a-4ebb-b625-9088da884d7a","type":"ToolEvents"},"toolbar":{"id":"94e248cb-8214-4cf6-b0c3-160fcb3e758e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"916f337a-009c-466a-81a7-98e9b65e9b40","type":"DataRange1d"},"y_range":{"id":"83a72740-d5fc-46e3-9c30-ebdccf81a707","type":"DataRange1d"}},"id":"cfd111c6-ca85-4eca-b426-4386a32869c1","type":"Plot"},{"attributes":{},"id":"c1da75c6-9f1a-4ebb-b625-9088da884d7a","type":"ToolEvents"},{"attributes":{"callback":null},"id":"83a72740-d5fc-46e3-9c30-ebdccf81a707","type":"DataRange1d"},{"attributes":{},"id":"cb554eb0-edba-4fbc-8e5d-cd7c7946371c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","l"],"data":{"l":[15.0,17.5,20.0,22.5,25.0,27.5,30.0,32.5,35.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"b35df0e4-9e1e-4b50-8749-0b07e44867b8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b35df0e4-9e1e-4b50-8749-0b07e44867b8","type":"ColumnDataSource"},"glyph":{"id":"371875e1-da55-4224-adb8-f06583abd0d2","type":"Ray"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f7230da4-9e81-44ca-9183-0c7769d37c4e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"916f337a-009c-466a-81a7-98e9b65e9b40","type":"DataRange1d"},{"attributes":{},"id":"3baabd06-b027-49a1-a1b3-78df3c088cc3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2c7abe30-c9a6-441c-a6bd-5fb1694646cf","type":"BasicTickFormatter"},"plot":{"id":"cfd111c6-ca85-4eca-b426-4386a32869c1","type":"Plot"},"ticker":{"id":"cb554eb0-edba-4fbc-8e5d-cd7c7946371c","type":"BasicTicker"}},"id":"145548c1-c75f-42de-9ce7-d9a636aa17b3","type":"LinearAxis"}],"root_ids":["cfd111c6-ca85-4eca-b426-4386a32869c1"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"995a6762-cfc9-4de5-91df-2560e1147971","elementid":"e986539b-c645-474f-a22c-42e3689b06c7","modelid":"cfd111c6-ca85-4eca-b426-4386a32869c1"}];
              
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