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
      };var element = document.getElementById("7b346411-8e7d-40af-b97a-a988942324a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b346411-8e7d-40af-b97a-a988942324a8' but no matching script tag was found. ")
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
                  var docs_json = {"e3d64cd3-d342-4457-9dd1-6e274d8817e6":{"roots":{"references":[{"attributes":{"below":[{"id":"3cf52452-51af-49d4-a830-fff2b4d050f4","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"403afec2-4639-4eaa-a136-164760a84c91","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"44e1f875-f68a-4c39-94e5-28982f1fbf5f","type":"GlyphRenderer"},{"id":"3cf52452-51af-49d4-a830-fff2b4d050f4","type":"LinearAxis"},{"id":"403afec2-4639-4eaa-a136-164760a84c91","type":"LinearAxis"},{"id":"8ffbb56a-093d-4b88-ba25-20410b7118e0","type":"Grid"},{"id":"9d4e76e0-89dc-46c0-bcbb-3030cdaa0cd6","type":"Grid"}],"title":null,"tool_events":{"id":"23bbd105-57dd-4fd6-92e9-b1f8caf0a98b","type":"ToolEvents"},"toolbar":{"id":"29d46c0c-cc5c-4316-87f9-b313a87ff656","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ed7c3fd6-88e3-4114-92fa-3de73079b2e5","type":"DataRange1d"},"y_range":{"id":"02ade5e6-c957-4ff8-a7fe-15f9f1cb56c3","type":"DataRange1d"}},"id":"3acd6eec-8059-4e6f-96cb-279cd2884a8a","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"3acd6eec-8059-4e6f-96cb-279cd2884a8a","type":"Plot"},"ticker":{"id":"72de51ee-9810-493b-bec9-7ce71499a69c","type":"BasicTicker"}},"id":"9d4e76e0-89dc-46c0-bcbb-3030cdaa0cd6","type":"Grid"},{"attributes":{"data_source":{"id":"8fcedd87-38f9-4409-a06e-96346d87de47","type":"ColumnDataSource"},"glyph":{"id":"63e23326-2a06-46b0-9710-d991cca98871","type":"Ray"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"44e1f875-f68a-4c39-94e5-28982f1fbf5f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3300fb61-f575-4243-bad0-bed69532e329","type":"BasicTickFormatter"},"plot":{"id":"3acd6eec-8059-4e6f-96cb-279cd2884a8a","type":"Plot"},"ticker":{"id":"54e26da1-39ed-49a1-aa8b-830aa0f2681f","type":"BasicTicker"}},"id":"3cf52452-51af-49d4-a830-fff2b4d050f4","type":"LinearAxis"},{"attributes":{"plot":{"id":"3acd6eec-8059-4e6f-96cb-279cd2884a8a","type":"Plot"},"ticker":{"id":"54e26da1-39ed-49a1-aa8b-830aa0f2681f","type":"BasicTicker"}},"id":"8ffbb56a-093d-4b88-ba25-20410b7118e0","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"63e23326-2a06-46b0-9710-d991cca98871","type":"Ray"},{"attributes":{"callback":null},"id":"02ade5e6-c957-4ff8-a7fe-15f9f1cb56c3","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ed7c3fd6-88e3-4114-92fa-3de73079b2e5","type":"DataRange1d"},{"attributes":{},"id":"23bbd105-57dd-4fd6-92e9-b1f8caf0a98b","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"29d46c0c-cc5c-4316-87f9-b313a87ff656","type":"Toolbar"},{"attributes":{},"id":"482ad308-3154-48ec-94d8-cc043748531d","type":"BasicTickFormatter"},{"attributes":{},"id":"54e26da1-39ed-49a1-aa8b-830aa0f2681f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","l"],"data":{"l":[15.0,17.5,20.0,22.5,25.0,27.5,30.0,32.5,35.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"8fcedd87-38f9-4409-a06e-96346d87de47","type":"ColumnDataSource"},{"attributes":{},"id":"72de51ee-9810-493b-bec9-7ce71499a69c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"482ad308-3154-48ec-94d8-cc043748531d","type":"BasicTickFormatter"},"plot":{"id":"3acd6eec-8059-4e6f-96cb-279cd2884a8a","type":"Plot"},"ticker":{"id":"72de51ee-9810-493b-bec9-7ce71499a69c","type":"BasicTicker"}},"id":"403afec2-4639-4eaa-a136-164760a84c91","type":"LinearAxis"},{"attributes":{},"id":"3300fb61-f575-4243-bad0-bed69532e329","type":"BasicTickFormatter"}],"root_ids":["3acd6eec-8059-4e6f-96cb-279cd2884a8a"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"e3d64cd3-d342-4457-9dd1-6e274d8817e6","elementid":"7b346411-8e7d-40af-b97a-a988942324a8","modelid":"3acd6eec-8059-4e6f-96cb-279cd2884a8a"}];
                  
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