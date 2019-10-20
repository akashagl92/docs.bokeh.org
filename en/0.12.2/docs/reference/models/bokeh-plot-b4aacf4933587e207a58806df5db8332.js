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
      };var element = document.getElementById("cd65bb45-66a3-40cf-82fd-de7dc062f857");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd65bb45-66a3-40cf-82fd-de7dc062f857' but no matching script tag was found. ")
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
                  var docs_json = {"3e057d75-5413-4df2-a880-5986693d8666":{"roots":{"references":[{"attributes":{},"id":"1b21f672-945b-4595-ad55-4da0827117bd","type":"ToolEvents"},{"attributes":{},"id":"62bb9c5e-b223-40af-be68-0252ad3af526","type":"BasicTicker"},{"attributes":{},"id":"efddccec-01ae-4573-bf33-41ec9fd30805","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7401a3bc-8033-412a-a526-604f2a06a5c9","type":"Plot"},"ticker":{"id":"45fd470d-f852-4613-a91a-a806607f04e6","type":"BasicTicker"}},"id":"a5f43819-d81b-4bec-9498-4c600d995959","type":"Grid"},{"attributes":{"callback":null},"id":"177c4b34-5546-4bfb-b18c-981db95a9283","type":"DataRange1d"},{"attributes":{"data_source":{"id":"bac7597b-16b3-4f85-87db-c961fcb93d2f","type":"ColumnDataSource"},"glyph":{"id":"bb706fa4-f3b2-4fcd-82c1-44582c289456","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0c552068-2f20-4778-83b0-0a7f87e09009","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"cfe0e9d1-41e6-4c8a-83b0-15bde48d1414","type":"DataRange1d"},{"attributes":{},"id":"45fd470d-f852-4613-a91a-a806607f04e6","type":"BasicTicker"},{"attributes":{},"id":"cbf4987e-0352-407d-b873-69a6683818dd","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"353689e7-8cc7-4804-859b-7d73862fc1fb","type":"Toolbar"},{"attributes":{"formatter":{"id":"efddccec-01ae-4573-bf33-41ec9fd30805","type":"BasicTickFormatter"},"plot":{"id":"7401a3bc-8033-412a-a526-604f2a06a5c9","type":"Plot"},"ticker":{"id":"45fd470d-f852-4613-a91a-a806607f04e6","type":"BasicTicker"}},"id":"2fa336d0-8d89-4964-a563-ae1f0a30cc26","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"bac7597b-16b3-4f85-87db-c961fcb93d2f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb706fa4-f3b2-4fcd-82c1-44582c289456","type":"CircleX"},{"attributes":{"below":[{"id":"2fa336d0-8d89-4964-a563-ae1f0a30cc26","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f77a641d-3656-43b2-b86a-6ca0e1aa2de3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0c552068-2f20-4778-83b0-0a7f87e09009","type":"GlyphRenderer"},{"id":"2fa336d0-8d89-4964-a563-ae1f0a30cc26","type":"LinearAxis"},{"id":"f77a641d-3656-43b2-b86a-6ca0e1aa2de3","type":"LinearAxis"},{"id":"a5f43819-d81b-4bec-9498-4c600d995959","type":"Grid"},{"id":"50d66496-15a6-4c06-b6f3-94b0da832d02","type":"Grid"}],"title":null,"tool_events":{"id":"1b21f672-945b-4595-ad55-4da0827117bd","type":"ToolEvents"},"toolbar":{"id":"353689e7-8cc7-4804-859b-7d73862fc1fb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"177c4b34-5546-4bfb-b18c-981db95a9283","type":"DataRange1d"},"y_range":{"id":"cfe0e9d1-41e6-4c8a-83b0-15bde48d1414","type":"DataRange1d"}},"id":"7401a3bc-8033-412a-a526-604f2a06a5c9","type":"Plot"},{"attributes":{"formatter":{"id":"cbf4987e-0352-407d-b873-69a6683818dd","type":"BasicTickFormatter"},"plot":{"id":"7401a3bc-8033-412a-a526-604f2a06a5c9","type":"Plot"},"ticker":{"id":"62bb9c5e-b223-40af-be68-0252ad3af526","type":"BasicTicker"}},"id":"f77a641d-3656-43b2-b86a-6ca0e1aa2de3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"7401a3bc-8033-412a-a526-604f2a06a5c9","type":"Plot"},"ticker":{"id":"62bb9c5e-b223-40af-be68-0252ad3af526","type":"BasicTicker"}},"id":"50d66496-15a6-4c06-b6f3-94b0da832d02","type":"Grid"}],"root_ids":["7401a3bc-8033-412a-a526-604f2a06a5c9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"3e057d75-5413-4df2-a880-5986693d8666","elementid":"cd65bb45-66a3-40cf-82fd-de7dc062f857","modelid":"7401a3bc-8033-412a-a526-604f2a06a5c9"}];
                  
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