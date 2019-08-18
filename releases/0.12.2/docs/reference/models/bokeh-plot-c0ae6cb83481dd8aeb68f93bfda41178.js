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
      };var element = document.getElementById("69b967a0-5338-47de-85bc-b13b27cf61c8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69b967a0-5338-47de-85bc-b13b27cf61c8' but no matching script tag was found. ")
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
                  var docs_json = {"e5db62d9-6fff-448e-8823-951c670d9f3b":{"roots":{"references":[{"attributes":{"data_source":{"id":"78d266e8-6a64-4df0-8e0f-3e84d598d369","type":"ColumnDataSource"},"glyph":{"id":"8ec305d9-2ecf-4837-a478-5b21d2d6e807","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e84ef0eb-3341-42f3-b5c6-e609bba9360f","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ec305d9-2ecf-4837-a478-5b21d2d6e807","type":"DiamondCross"},{"attributes":{},"id":"ebe4f5b5-3822-497a-b3f6-db5e12ee2f8c","type":"BasicTicker"},{"attributes":{},"id":"505dd0fc-65fc-4edf-9443-3d251b717785","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"94577786-38df-451d-9bb3-adf58e8fc0a5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c860a01a-c0dc-43b5-876b-312251c3463b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e84ef0eb-3341-42f3-b5c6-e609bba9360f","type":"GlyphRenderer"},{"id":"94577786-38df-451d-9bb3-adf58e8fc0a5","type":"LinearAxis"},{"id":"c860a01a-c0dc-43b5-876b-312251c3463b","type":"LinearAxis"},{"id":"749f1c57-5870-4609-8bb4-db73cdda9e82","type":"Grid"},{"id":"9c5f0e96-cb9f-429d-b66c-09bf97cfb07b","type":"Grid"}],"title":null,"tool_events":{"id":"fa65268c-35e8-46b1-8d30-cea0c6c3e0eb","type":"ToolEvents"},"toolbar":{"id":"1275a103-5e15-44c9-adbf-5c363635c6f1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"80bd8e49-025b-4d2e-b0d9-ea0344820d3c","type":"DataRange1d"},"y_range":{"id":"b7f506e5-c7a5-43e2-b5ce-d885cfc80b21","type":"DataRange1d"}},"id":"3758f5f8-b291-42ad-b253-41b29977f177","type":"Plot"},{"attributes":{"formatter":{"id":"f9d53238-76a4-41e1-98da-64f1cd89b10d","type":"BasicTickFormatter"},"plot":{"id":"3758f5f8-b291-42ad-b253-41b29977f177","type":"Plot"},"ticker":{"id":"ebe4f5b5-3822-497a-b3f6-db5e12ee2f8c","type":"BasicTicker"}},"id":"94577786-38df-451d-9bb3-adf58e8fc0a5","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1275a103-5e15-44c9-adbf-5c363635c6f1","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"78d266e8-6a64-4df0-8e0f-3e84d598d369","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"b7f506e5-c7a5-43e2-b5ce-d885cfc80b21","type":"DataRange1d"},{"attributes":{},"id":"d812d28e-0eea-4bb1-91d2-670a34714c31","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3758f5f8-b291-42ad-b253-41b29977f177","type":"Plot"},"ticker":{"id":"d812d28e-0eea-4bb1-91d2-670a34714c31","type":"BasicTicker"}},"id":"9c5f0e96-cb9f-429d-b66c-09bf97cfb07b","type":"Grid"},{"attributes":{},"id":"f9d53238-76a4-41e1-98da-64f1cd89b10d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3758f5f8-b291-42ad-b253-41b29977f177","type":"Plot"},"ticker":{"id":"ebe4f5b5-3822-497a-b3f6-db5e12ee2f8c","type":"BasicTicker"}},"id":"749f1c57-5870-4609-8bb4-db73cdda9e82","type":"Grid"},{"attributes":{},"id":"fa65268c-35e8-46b1-8d30-cea0c6c3e0eb","type":"ToolEvents"},{"attributes":{"formatter":{"id":"505dd0fc-65fc-4edf-9443-3d251b717785","type":"BasicTickFormatter"},"plot":{"id":"3758f5f8-b291-42ad-b253-41b29977f177","type":"Plot"},"ticker":{"id":"d812d28e-0eea-4bb1-91d2-670a34714c31","type":"BasicTicker"}},"id":"c860a01a-c0dc-43b5-876b-312251c3463b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"80bd8e49-025b-4d2e-b0d9-ea0344820d3c","type":"DataRange1d"}],"root_ids":["3758f5f8-b291-42ad-b253-41b29977f177"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"e5db62d9-6fff-448e-8823-951c670d9f3b","elementid":"69b967a0-5338-47de-85bc-b13b27cf61c8","modelid":"3758f5f8-b291-42ad-b253-41b29977f177"}];
                  
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