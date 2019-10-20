(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("903d2dba-df3a-4534-84b1-50061b66900f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '903d2dba-df3a-4534-84b1-50061b66900f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"cfe27341-d189-4734-81a2-36aa6c640092":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"e9517840-7381-4c5e-8bee-84995e42ed56","type":"Title"},{"attributes":{"callback":null},"id":"956fa0e5-2038-4059-89ad-eabcd1eeb685","type":"DataRange1d"},{"attributes":{},"id":"66c3fa84-4881-428a-b0fc-1650bf848f19","type":"ToolEvents"},{"attributes":{"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"}},"id":"eb8c204a-ae31-4f80-8d23-6dfb9f5d0ea5","type":"HelpTool"},{"attributes":{"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6cc7b6f2-595d-46e3-be72-288f56a94982","type":"BasicTicker"}},"id":"cbcb2e46-1c9f-4abb-adc7-182fcc15a04c","type":"Grid"},{"attributes":{},"id":"6cc7b6f2-595d-46e3-be72-288f56a94982","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ba32bbf-ec02-4861-916d-6424cff4c6cf","type":"PanTool"},{"id":"5e561250-3b65-4b0f-8d60-fc33f4593187","type":"WheelZoomTool"},{"id":"01adbbb9-114d-4ca5-b092-437c3ca34e97","type":"BoxZoomTool"},{"id":"417d52a1-d6d4-44d3-afaf-7ca0cbd49cda","type":"SaveTool"},{"id":"d5cc9237-0937-4ae5-a7bd-42f7e0989103","type":"ResetTool"},{"id":"eb8c204a-ae31-4f80-8d23-6dfb9f5d0ea5","type":"HelpTool"}]},"id":"62a17d1f-d3e1-4437-9bae-13e2e2afccce","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"949ac644-075b-497d-94a6-89e5020cc8f9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"}},"id":"5e561250-3b65-4b0f-8d60-fc33f4593187","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"dfdd2b60-0a14-46db-b1a2-5919d8a290fe","type":"LinearAxis"}],"left":[{"id":"1dcee2dc-feeb-4147-9c36-4ad3d589fcd6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"dfdd2b60-0a14-46db-b1a2-5919d8a290fe","type":"LinearAxis"},{"id":"cbcb2e46-1c9f-4abb-adc7-182fcc15a04c","type":"Grid"},{"id":"1dcee2dc-feeb-4147-9c36-4ad3d589fcd6","type":"LinearAxis"},{"id":"8727c36e-e52c-4c38-a480-9938252855fe","type":"Grid"},{"id":"fab67063-0476-49db-9c36-39707b1e4f3d","type":"BoxAnnotation"},{"id":"571a6151-844f-48ca-b7b8-cf97c40b1790","type":"GlyphRenderer"}],"title":{"id":"e9517840-7381-4c5e-8bee-84995e42ed56","type":"Title"},"tool_events":{"id":"66c3fa84-4881-428a-b0fc-1650bf848f19","type":"ToolEvents"},"toolbar":{"id":"62a17d1f-d3e1-4437-9bae-13e2e2afccce","type":"Toolbar"},"x_range":{"id":"956fa0e5-2038-4059-89ad-eabcd1eeb685","type":"DataRange1d"},"y_range":{"id":"6d6b879f-bb89-452b-af63-174b1e8b3ad7","type":"DataRange1d"}},"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d49a64f-7f7a-4a43-9288-74cdd1160ef4","type":"BasicTicker"}},"id":"8727c36e-e52c-4c38-a480-9938252855fe","type":"Grid"},{"attributes":{"formatter":{"id":"6b835208-5493-4fd8-90cf-7e861ff72bc4","type":"BasicTickFormatter"},"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d49a64f-7f7a-4a43-9288-74cdd1160ef4","type":"BasicTicker"}},"id":"1dcee2dc-feeb-4147-9c36-4ad3d589fcd6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"949ac644-075b-497d-94a6-89e5020cc8f9","type":"ColumnDataSource"},"glyph":{"id":"c2ec748e-e993-409f-9a84-42a746878ede","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"1097b77b-6c92-4c12-877a-1da6d8e00da9","type":"VBar"},"selection_glyph":null},"id":"571a6151-844f-48ca-b7b8-cf97c40b1790","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"1097b77b-6c92-4c12-877a-1da6d8e00da9","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fab67063-0476-49db-9c36-39707b1e4f3d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"}},"id":"417d52a1-d6d4-44d3-afaf-7ca0cbd49cda","type":"SaveTool"},{"attributes":{},"id":"6d49a64f-7f7a-4a43-9288-74cdd1160ef4","type":"BasicTicker"},{"attributes":{},"id":"6b835208-5493-4fd8-90cf-7e861ff72bc4","type":"BasicTickFormatter"},{"attributes":{},"id":"99db2f7d-6009-4e35-bbab-c99d2f7cfe06","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"99db2f7d-6009-4e35-bbab-c99d2f7cfe06","type":"BasicTickFormatter"},"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6cc7b6f2-595d-46e3-be72-288f56a94982","type":"BasicTicker"}},"id":"dfdd2b60-0a14-46db-b1a2-5919d8a290fe","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6d6b879f-bb89-452b-af63-174b1e8b3ad7","type":"DataRange1d"},{"attributes":{"overlay":{"id":"fab67063-0476-49db-9c36-39707b1e4f3d","type":"BoxAnnotation"},"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"}},"id":"01adbbb9-114d-4ca5-b092-437c3ca34e97","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"}},"id":"d5cc9237-0937-4ae5-a7bd-42f7e0989103","type":"ResetTool"},{"attributes":{"plot":{"id":"f79b440c-23df-4361-8d47-94be8822be7b","subtype":"Figure","type":"Plot"}},"id":"9ba32bbf-ec02-4861-916d-6424cff4c6cf","type":"PanTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"c2ec748e-e993-409f-9a84-42a746878ede","type":"VBar"}],"root_ids":["f79b440c-23df-4361-8d47-94be8822be7b"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"cfe27341-d189-4734-81a2-36aa6c640092","elementid":"903d2dba-df3a-4534-84b1-50061b66900f","modelid":"f79b440c-23df-4361-8d47-94be8822be7b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
