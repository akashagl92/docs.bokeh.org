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
      };var element = document.getElementById("5df43326-bf3d-45b6-bf79-1a334433ef3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5df43326-bf3d-45b6-bf79-1a334433ef3b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"073870f2-d88f-48f6-b6ac-da4d6d86b7c2":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a7db5a6a-63e3-4d2c-bba0-c12ea3e1b33a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1b67688d-58d5-4f8c-810e-b7406e485bb6","type":"BasicTickFormatter"},"plot":{"id":"e3b5519a-2406-4cd9-ab2d-1813e499780f","type":"Plot"},"ticker":{"id":"bcee3abf-6ca5-486b-954a-175db20896e2","type":"BasicTicker"}},"id":"989809fa-cdde-48eb-a407-7673ed586a7f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c17a09ee-e76c-4094-a334-776b2992b709","type":"DataRange1d"},{"attributes":{},"id":"b31b72d7-7ef3-4b29-8cec-5561c9e0a295","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"e3b5519a-2406-4cd9-ab2d-1813e499780f","type":"Plot"},"ticker":{"id":"58aa586a-559e-4505-8444-9fec2c55ca6e","type":"BasicTicker"}},"id":"3d82768b-8982-48aa-9e1b-ee7e89cf8f56","type":"Grid"},{"attributes":{"plot":{"id":"e3b5519a-2406-4cd9-ab2d-1813e499780f","type":"Plot"},"ticker":{"id":"bcee3abf-6ca5-486b-954a-175db20896e2","type":"BasicTicker"}},"id":"8952b799-3e84-49cc-bb9a-fc17e4093a1c","type":"Grid"},{"attributes":{},"id":"1b67688d-58d5-4f8c-810e-b7406e485bb6","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7d9c82a8-56a1-428a-a5e9-aae883dbcae5","type":"Toolbar"},{"attributes":{},"id":"bcee3abf-6ca5-486b-954a-175db20896e2","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"a64101a3-3049-455d-92f6-e9ede389e32f","type":"Oval"},{"attributes":{},"id":"f58058d3-c5a2-4c65-9c9a-0930671f3685","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"989809fa-cdde-48eb-a407-7673ed586a7f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8a93d37a-7745-435a-80e9-05c12f95ad3c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5ee38f5e-f433-49ab-bcab-856dad74480b","type":"GlyphRenderer"},{"id":"989809fa-cdde-48eb-a407-7673ed586a7f","type":"LinearAxis"},{"id":"8a93d37a-7745-435a-80e9-05c12f95ad3c","type":"LinearAxis"},{"id":"8952b799-3e84-49cc-bb9a-fc17e4093a1c","type":"Grid"},{"id":"3d82768b-8982-48aa-9e1b-ee7e89cf8f56","type":"Grid"}],"title":null,"tool_events":{"id":"b31b72d7-7ef3-4b29-8cec-5561c9e0a295","type":"ToolEvents"},"toolbar":{"id":"7d9c82a8-56a1-428a-a5e9-aae883dbcae5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0a974e1d-a169-44dd-ab46-417ce96ac207","type":"DataRange1d"},"y_range":{"id":"c17a09ee-e76c-4094-a334-776b2992b709","type":"DataRange1d"}},"id":"e3b5519a-2406-4cd9-ab2d-1813e499780f","type":"Plot"},{"attributes":{"data_source":{"id":"a7db5a6a-63e3-4d2c-bba0-c12ea3e1b33a","type":"ColumnDataSource"},"glyph":{"id":"a64101a3-3049-455d-92f6-e9ede389e32f","type":"Oval"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5ee38f5e-f433-49ab-bcab-856dad74480b","type":"GlyphRenderer"},{"attributes":{},"id":"58aa586a-559e-4505-8444-9fec2c55ca6e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f58058d3-c5a2-4c65-9c9a-0930671f3685","type":"BasicTickFormatter"},"plot":{"id":"e3b5519a-2406-4cd9-ab2d-1813e499780f","type":"Plot"},"ticker":{"id":"58aa586a-559e-4505-8444-9fec2c55ca6e","type":"BasicTicker"}},"id":"8a93d37a-7745-435a-80e9-05c12f95ad3c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0a974e1d-a169-44dd-ab46-417ce96ac207","type":"DataRange1d"}],"root_ids":["e3b5519a-2406-4cd9-ab2d-1813e499780f"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"073870f2-d88f-48f6-b6ac-da4d6d86b7c2","elementid":"5df43326-bf3d-45b6-bf79-1a334433ef3b","modelid":"e3b5519a-2406-4cd9-ab2d-1813e499780f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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