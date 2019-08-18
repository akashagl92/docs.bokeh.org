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
      };var element = document.getElementById("5cd3c380-be12-41dd-bc0e-972be2818dab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5cd3c380-be12-41dd-bc0e-972be2818dab' but no matching script tag was found. ")
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
                  var docs_json = {"508e264b-06c0-42ef-bf9d-f534098b2545":{"roots":{"references":[{"attributes":{},"id":"5d2a1a68-fe03-4e09-90db-361fad3db0db","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"34556c44-5f58-4bc6-97d6-311eb12bde52","type":"Toolbar"},{"attributes":{},"id":"142eaf04-6e9f-4362-8b58-8bb729961c97","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9a2588e7-e3c4-4ed8-9d85-a56a3d556dd0","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5d2a1a68-fe03-4e09-90db-361fad3db0db","type":"BasicTickFormatter"},"plot":{"id":"5e346150-308d-425d-bd3e-25a244560834","type":"Plot"},"ticker":{"id":"142eaf04-6e9f-4362-8b58-8bb729961c97","type":"BasicTicker"}},"id":"675dde6f-364d-4d2a-8bca-28a9ade468c2","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ce1ef08d-047b-4822-9af2-b554906ca793","type":"BasicTickFormatter"},"plot":{"id":"5e346150-308d-425d-bd3e-25a244560834","type":"Plot"},"ticker":{"id":"a4174914-cfa8-47b4-9887-868ed427a2ce","type":"BasicTicker"}},"id":"36302c02-78fa-44ab-bb3e-216504d77574","type":"LinearAxis"},{"attributes":{"below":[{"id":"36302c02-78fa-44ab-bb3e-216504d77574","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"675dde6f-364d-4d2a-8bca-28a9ade468c2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0856faab-60e6-4dae-9e2b-5ad3153c0427","type":"GlyphRenderer"},{"id":"36302c02-78fa-44ab-bb3e-216504d77574","type":"LinearAxis"},{"id":"675dde6f-364d-4d2a-8bca-28a9ade468c2","type":"LinearAxis"},{"id":"da08dee8-22c4-4ac5-af09-92c473e82f4b","type":"Grid"},{"id":"cf235fcd-d0ef-4f73-a456-c658d9f9bb83","type":"Grid"}],"title":null,"tool_events":{"id":"924e6041-4319-4f45-9286-29e6ef88be10","type":"ToolEvents"},"toolbar":{"id":"34556c44-5f58-4bc6-97d6-311eb12bde52","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4e79b424-03df-4f08-a752-e4621bb72b2a","type":"DataRange1d"},"y_range":{"id":"9a2588e7-e3c4-4ed8-9d85-a56a3d556dd0","type":"DataRange1d"}},"id":"5e346150-308d-425d-bd3e-25a244560834","type":"Plot"},{"attributes":{"data_source":{"id":"6b7e7ef5-33e6-4b5a-915a-1fca6f5b28d9","type":"ColumnDataSource"},"glyph":{"id":"3f38abb6-4732-4d32-915e-b8a6c7fbd77b","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0856faab-60e6-4dae-9e2b-5ad3153c0427","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"6b7e7ef5-33e6-4b5a-915a-1fca6f5b28d9","type":"ColumnDataSource"},{"attributes":{},"id":"a4174914-cfa8-47b4-9887-868ed427a2ce","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4e79b424-03df-4f08-a752-e4621bb72b2a","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f38abb6-4732-4d32-915e-b8a6c7fbd77b","type":"InvertedTriangle"},{"attributes":{"plot":{"id":"5e346150-308d-425d-bd3e-25a244560834","type":"Plot"},"ticker":{"id":"a4174914-cfa8-47b4-9887-868ed427a2ce","type":"BasicTicker"}},"id":"da08dee8-22c4-4ac5-af09-92c473e82f4b","type":"Grid"},{"attributes":{},"id":"924e6041-4319-4f45-9286-29e6ef88be10","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"5e346150-308d-425d-bd3e-25a244560834","type":"Plot"},"ticker":{"id":"142eaf04-6e9f-4362-8b58-8bb729961c97","type":"BasicTicker"}},"id":"cf235fcd-d0ef-4f73-a456-c658d9f9bb83","type":"Grid"},{"attributes":{},"id":"ce1ef08d-047b-4822-9af2-b554906ca793","type":"BasicTickFormatter"}],"root_ids":["5e346150-308d-425d-bd3e-25a244560834"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"508e264b-06c0-42ef-bf9d-f534098b2545","elementid":"5cd3c380-be12-41dd-bc0e-972be2818dab","modelid":"5e346150-308d-425d-bd3e-25a244560834"}];
                  
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