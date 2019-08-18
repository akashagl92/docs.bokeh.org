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
      };var element = document.getElementById("5f53a88f-fa37-4a26-a382-b7ee897948c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5f53a88f-fa37-4a26-a382-b7ee897948c3' but no matching script tag was found. ")
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
                  var docs_json = {"4a2faf4d-8380-4b19-9ca2-c6538576d924":{"roots":{"references":[{"attributes":{"callback":null},"id":"cc980cf9-06a7-4bd4-9b6a-6e35ca145fee","type":"DataRange1d"},{"attributes":{},"id":"9cff70c6-83ee-424d-8812-b4233be07b16","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"edaf17f8-2755-457f-97f6-edf10b1e4980","type":"Toolbar"},{"attributes":{"formatter":{"id":"732102f4-3336-467e-9b8c-d7b228ac80ba","type":"BasicTickFormatter"},"plot":{"id":"3122a5ad-027a-44ca-9f38-d51a292d3fab","type":"Plot"},"ticker":{"id":"68376f3b-fb03-49c5-90b7-f25d513be4ae","type":"BasicTicker"}},"id":"0d4ed4af-918e-4114-8a3a-958de8c4aaa9","type":"LinearAxis"},{"attributes":{"plot":{"id":"3122a5ad-027a-44ca-9f38-d51a292d3fab","type":"Plot"},"ticker":{"id":"ce09d5f1-558f-4966-979b-a7610ee1d832","type":"BasicTicker"}},"id":"d26bd259-948f-4f40-a397-1b33409305ed","type":"Grid"},{"attributes":{"formatter":{"id":"9cff70c6-83ee-424d-8812-b4233be07b16","type":"BasicTickFormatter"},"plot":{"id":"3122a5ad-027a-44ca-9f38-d51a292d3fab","type":"Plot"},"ticker":{"id":"ce09d5f1-558f-4966-979b-a7610ee1d832","type":"BasicTicker"}},"id":"4c85e3af-b7e7-4d03-9fa3-dbb1815e9a2d","type":"LinearAxis"},{"attributes":{},"id":"ce09d5f1-558f-4966-979b-a7610ee1d832","type":"BasicTicker"},{"attributes":{"callback":null},"id":"96a4f512-37d6-444f-8542-20e41f30f08c","type":"DataRange1d"},{"attributes":{},"id":"68376f3b-fb03-49c5-90b7-f25d513be4ae","type":"BasicTicker"},{"attributes":{},"id":"dc4f4b04-5b11-4cfa-9661-68a289111e67","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e2bb4e1d-5022-45d8-8428-87458f969e8f","type":"ColumnDataSource"},"glyph":{"id":"64d3a5c7-ffab-402a-9134-a9c478658d44","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d848252b-a9e7-4755-a65c-4db2bb7211d5","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"64d3a5c7-ffab-402a-9134-a9c478658d44","type":"Ellipse"},{"attributes":{"below":[{"id":"4c85e3af-b7e7-4d03-9fa3-dbb1815e9a2d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0d4ed4af-918e-4114-8a3a-958de8c4aaa9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d848252b-a9e7-4755-a65c-4db2bb7211d5","type":"GlyphRenderer"},{"id":"4c85e3af-b7e7-4d03-9fa3-dbb1815e9a2d","type":"LinearAxis"},{"id":"0d4ed4af-918e-4114-8a3a-958de8c4aaa9","type":"LinearAxis"},{"id":"d26bd259-948f-4f40-a397-1b33409305ed","type":"Grid"},{"id":"cc2eb5fa-b8ea-4ede-82f7-26a0fcfff9f3","type":"Grid"}],"title":null,"tool_events":{"id":"dc4f4b04-5b11-4cfa-9661-68a289111e67","type":"ToolEvents"},"toolbar":{"id":"edaf17f8-2755-457f-97f6-edf10b1e4980","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96a4f512-37d6-444f-8542-20e41f30f08c","type":"DataRange1d"},"y_range":{"id":"cc980cf9-06a7-4bd4-9b6a-6e35ca145fee","type":"DataRange1d"}},"id":"3122a5ad-027a-44ca-9f38-d51a292d3fab","type":"Plot"},{"attributes":{},"id":"732102f4-3336-467e-9b8c-d7b228ac80ba","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3122a5ad-027a-44ca-9f38-d51a292d3fab","type":"Plot"},"ticker":{"id":"68376f3b-fb03-49c5-90b7-f25d513be4ae","type":"BasicTicker"}},"id":"cc2eb5fa-b8ea-4ede-82f7-26a0fcfff9f3","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"e2bb4e1d-5022-45d8-8428-87458f969e8f","type":"ColumnDataSource"}],"root_ids":["3122a5ad-027a-44ca-9f38-d51a292d3fab"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"4a2faf4d-8380-4b19-9ca2-c6538576d924","elementid":"5f53a88f-fa37-4a26-a382-b7ee897948c3","modelid":"3122a5ad-027a-44ca-9f38-d51a292d3fab"}];
                  
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