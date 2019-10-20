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
      };var element = document.getElementById("b254c107-864b-4ff9-aa28-e22b96ea7444");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b254c107-864b-4ff9-aa28-e22b96ea7444' but no matching script tag was found. ")
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
                  var docs_json = {"331ceb49-e91c-44ca-a702-ec2a3388842a":{"roots":{"references":[{"attributes":{"callback":null},"id":"d3435b52-2462-44d2-8b37-93abd28c2708","type":"DataRange1d"},{"attributes":{},"id":"bb6bdf8d-7d0b-4398-88d6-282af3bacb77","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"5b351bb8-6a16-4a28-b305-e830abbd4dda","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e4154264-a03b-4da0-8fea-143978cb412d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f9ab3e5c-cd6e-4287-b146-cb7b9655e7cd","type":"GlyphRenderer"},{"id":"5b351bb8-6a16-4a28-b305-e830abbd4dda","type":"LinearAxis"},{"id":"e4154264-a03b-4da0-8fea-143978cb412d","type":"LinearAxis"},{"id":"75bb4c33-1695-4121-94a3-9eba74948b4c","type":"Grid"},{"id":"f90fecc3-66ef-44ac-a408-60b5ef957ab8","type":"Grid"}],"title":null,"tool_events":{"id":"8f562025-2497-4648-8cb8-ae23af9d2ae1","type":"ToolEvents"},"toolbar":{"id":"cfc8a577-92a5-436c-b508-b5ddb12e2f7d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d3435b52-2462-44d2-8b37-93abd28c2708","type":"DataRange1d"},"y_range":{"id":"21ef197b-e680-4862-8cc3-05e11f010504","type":"DataRange1d"}},"id":"e116d7f6-4522-49a0-934a-e7b73cbfe616","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cfc8a577-92a5-436c-b508-b5ddb12e2f7d","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5035ce5-2a83-4329-96e8-c55ce058f4f4","type":"Cross"},{"attributes":{},"id":"06f0d98e-abd2-4bbc-890a-fd9f251ae1f3","type":"BasicTickFormatter"},{"attributes":{},"id":"8f562025-2497-4648-8cb8-ae23af9d2ae1","type":"ToolEvents"},{"attributes":{"formatter":{"id":"06f0d98e-abd2-4bbc-890a-fd9f251ae1f3","type":"BasicTickFormatter"},"plot":{"id":"e116d7f6-4522-49a0-934a-e7b73cbfe616","type":"Plot"},"ticker":{"id":"e63538b0-db5b-49ac-b59a-4a340a20be84","type":"BasicTicker"}},"id":"5b351bb8-6a16-4a28-b305-e830abbd4dda","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e116d7f6-4522-49a0-934a-e7b73cbfe616","type":"Plot"},"ticker":{"id":"1935a608-ec3d-4061-8e5b-1686578ab005","type":"BasicTicker"}},"id":"f90fecc3-66ef-44ac-a408-60b5ef957ab8","type":"Grid"},{"attributes":{},"id":"1935a608-ec3d-4061-8e5b-1686578ab005","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"941ea1ac-22a1-499b-8301-7961e0335e6b","type":"ColumnDataSource"},{"attributes":{},"id":"e63538b0-db5b-49ac-b59a-4a340a20be84","type":"BasicTicker"},{"attributes":{"data_source":{"id":"941ea1ac-22a1-499b-8301-7961e0335e6b","type":"ColumnDataSource"},"glyph":{"id":"a5035ce5-2a83-4329-96e8-c55ce058f4f4","type":"Cross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f9ab3e5c-cd6e-4287-b146-cb7b9655e7cd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e116d7f6-4522-49a0-934a-e7b73cbfe616","type":"Plot"},"ticker":{"id":"e63538b0-db5b-49ac-b59a-4a340a20be84","type":"BasicTicker"}},"id":"75bb4c33-1695-4121-94a3-9eba74948b4c","type":"Grid"},{"attributes":{"formatter":{"id":"bb6bdf8d-7d0b-4398-88d6-282af3bacb77","type":"BasicTickFormatter"},"plot":{"id":"e116d7f6-4522-49a0-934a-e7b73cbfe616","type":"Plot"},"ticker":{"id":"1935a608-ec3d-4061-8e5b-1686578ab005","type":"BasicTicker"}},"id":"e4154264-a03b-4da0-8fea-143978cb412d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"21ef197b-e680-4862-8cc3-05e11f010504","type":"DataRange1d"}],"root_ids":["e116d7f6-4522-49a0-934a-e7b73cbfe616"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"331ceb49-e91c-44ca-a702-ec2a3388842a","elementid":"b254c107-864b-4ff9-aa28-e22b96ea7444","modelid":"e116d7f6-4522-49a0-934a-e7b73cbfe616"}];
                  
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