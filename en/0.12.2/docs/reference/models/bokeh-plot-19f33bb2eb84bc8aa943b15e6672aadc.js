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
      };var element = document.getElementById("f9b4ade2-b07c-4a4c-af49-31c8f0fc2f0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f9b4ade2-b07c-4a4c-af49-31c8f0fc2f0f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"c0a592ca-6c47-4c5a-a1e4-c98646cb8653":{"roots":{"references":[{"attributes":{},"id":"13f7ef26-75f6-456f-ba4f-adbfcca15788","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"08720a2f-e2f4-49a1-b0d3-7af196679f4f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"08720a2f-e2f4-49a1-b0d3-7af196679f4f","type":"ColumnDataSource"},"glyph":{"id":"e01b66b7-6924-48d5-a7ed-230403227c66","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"34d961c2-cd99-415d-a7a3-6a56e0d563ac","type":"GlyphRenderer"},{"attributes":{},"id":"44f12551-beb0-4e29-b775-3613bc0a6a5d","type":"ToolEvents"},{"attributes":{"callback":null},"id":"05f99551-131d-4e26-97b0-8370eaac2846","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ee248676-d29e-4e8f-b303-b0a698e1561e","type":"DataRange1d"},{"attributes":{},"id":"d3782863-9abb-4a3e-8b03-6c1008783a29","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e01b66b7-6924-48d5-a7ed-230403227c66","type":"Triangle"},{"attributes":{"formatter":{"id":"b1d081c8-d0e3-4708-9717-7ebf1bddd9c8","type":"BasicTickFormatter"},"plot":{"id":"1a0ad1e8-4da4-40e7-8213-055ae1ef8043","type":"Plot"},"ticker":{"id":"13f7ef26-75f6-456f-ba4f-adbfcca15788","type":"BasicTicker"}},"id":"9ab30e5a-2589-401f-9c3a-6da671453a32","type":"LinearAxis"},{"attributes":{"plot":{"id":"1a0ad1e8-4da4-40e7-8213-055ae1ef8043","type":"Plot"},"ticker":{"id":"13f7ef26-75f6-456f-ba4f-adbfcca15788","type":"BasicTicker"}},"id":"714c321a-1ae7-4b68-835b-be7f31d5be58","type":"Grid"},{"attributes":{"below":[{"id":"9ab30e5a-2589-401f-9c3a-6da671453a32","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bce27a90-3885-4e6e-a754-1b4c2c66abf6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"34d961c2-cd99-415d-a7a3-6a56e0d563ac","type":"GlyphRenderer"},{"id":"9ab30e5a-2589-401f-9c3a-6da671453a32","type":"LinearAxis"},{"id":"bce27a90-3885-4e6e-a754-1b4c2c66abf6","type":"LinearAxis"},{"id":"714c321a-1ae7-4b68-835b-be7f31d5be58","type":"Grid"},{"id":"b5e4aad4-94c6-4da1-a0c8-de1db9ca8b46","type":"Grid"}],"title":null,"tool_events":{"id":"44f12551-beb0-4e29-b775-3613bc0a6a5d","type":"ToolEvents"},"toolbar":{"id":"7de0117b-42b2-4700-aa4f-bc57ce1ea2d8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"05f99551-131d-4e26-97b0-8370eaac2846","type":"DataRange1d"},"y_range":{"id":"ee248676-d29e-4e8f-b303-b0a698e1561e","type":"DataRange1d"}},"id":"1a0ad1e8-4da4-40e7-8213-055ae1ef8043","type":"Plot"},{"attributes":{},"id":"3616a1c0-c548-4712-aedf-f440dc336764","type":"BasicTicker"},{"attributes":{},"id":"b1d081c8-d0e3-4708-9717-7ebf1bddd9c8","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1a0ad1e8-4da4-40e7-8213-055ae1ef8043","type":"Plot"},"ticker":{"id":"3616a1c0-c548-4712-aedf-f440dc336764","type":"BasicTicker"}},"id":"b5e4aad4-94c6-4da1-a0c8-de1db9ca8b46","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7de0117b-42b2-4700-aa4f-bc57ce1ea2d8","type":"Toolbar"},{"attributes":{"formatter":{"id":"d3782863-9abb-4a3e-8b03-6c1008783a29","type":"BasicTickFormatter"},"plot":{"id":"1a0ad1e8-4da4-40e7-8213-055ae1ef8043","type":"Plot"},"ticker":{"id":"3616a1c0-c548-4712-aedf-f440dc336764","type":"BasicTicker"}},"id":"bce27a90-3885-4e6e-a754-1b4c2c66abf6","type":"LinearAxis"}],"root_ids":["1a0ad1e8-4da4-40e7-8213-055ae1ef8043"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"c0a592ca-6c47-4c5a-a1e4-c98646cb8653","elementid":"f9b4ade2-b07c-4a4c-af49-31c8f0fc2f0f","modelid":"1a0ad1e8-4da4-40e7-8213-055ae1ef8043"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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