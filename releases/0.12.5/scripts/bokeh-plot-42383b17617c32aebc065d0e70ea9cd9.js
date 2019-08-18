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
      };var element = document.getElementById("49927f31-4bdc-49d9-80d8-2dcba170a6c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49927f31-4bdc-49d9-80d8-2dcba170a6c2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"3f012e77-646e-4ebf-b5d5-b5a040c6cc13":{"roots":{"references":[{"attributes":{"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"}},"id":"0e31c27a-51b2-4816-897e-de8475ff5ec5","type":"HelpTool"},{"attributes":{"formatter":{"id":"305da5c7-eccf-4aa7-8a76-a1e956291849","type":"BasicTickFormatter"},"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2626de40-0d6f-4fdf-ba95-55b07560234e","type":"BasicTicker"}},"id":"676c3f22-cabd-47d8-893a-f93f77390ca8","type":"LinearAxis"},{"attributes":{"overlay":{"id":"c372ce95-20f8-41cc-bedd-0911870afc82","type":"BoxAnnotation"},"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"}},"id":"0af3accb-2c53-4df8-b247-299b38fed173","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e1e0a735-b49c-47d0-8ac3-48d7dc20ea91","type":"PanTool"},{"id":"8c651649-a440-46ec-aef8-6503da295c35","type":"WheelZoomTool"},{"id":"0af3accb-2c53-4df8-b247-299b38fed173","type":"BoxZoomTool"},{"id":"2c2c6894-2f18-49e3-b883-28bec1a39769","type":"SaveTool"},{"id":"c4329310-f1c5-4dcb-82d7-fb4b49f422ca","type":"ResetTool"},{"id":"0e31c27a-51b2-4816-897e-de8475ff5ec5","type":"HelpTool"}]},"id":"f8fe772c-8e88-4432-b5e0-c4d73bd4142a","type":"Toolbar"},{"attributes":{},"id":"965b26b1-fcd8-4c54-a54f-df37aacbdbb4","type":"ToolEvents"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a15634bd-0ec5-48df-a4a5-e5afa054495c","type":"MultiLine"},{"attributes":{"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"}},"id":"8c651649-a440-46ec-aef8-6503da295c35","type":"WheelZoomTool"},{"attributes":{},"id":"8ccebddc-73c7-410a-9866-df8111329ace","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c372ce95-20f8-41cc-bedd-0911870afc82","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"}},"id":"e1e0a735-b49c-47d0-8ac3-48d7dc20ea91","type":"PanTool"},{"attributes":{},"id":"305da5c7-eccf-4aa7-8a76-a1e956291849","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e923f86a-d6e8-4fd9-b075-7b39f4f12fa2","type":"ColumnDataSource"},"glyph":{"id":"a15634bd-0ec5-48df-a4a5-e5afa054495c","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74a2ced2-2919-45ed-aae1-50979f8f039d","type":"MultiLine"},"selection_glyph":null},"id":"2468c61c-20f7-4d0e-a8b6-0eb286d64fba","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6738804b-091f-4c1f-be04-7fc631dc8f17","type":"BasicTickFormatter"},"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ccebddc-73c7-410a-9866-df8111329ace","type":"BasicTicker"}},"id":"9062d6b2-321d-4ddb-8dda-c7950e2ef736","type":"LinearAxis"},{"attributes":{"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ccebddc-73c7-410a-9866-df8111329ace","type":"BasicTicker"}},"id":"a29b4612-1625-4a1c-8db5-3141e99acf7d","type":"Grid"},{"attributes":{},"id":"6738804b-091f-4c1f-be04-7fc631dc8f17","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2626de40-0d6f-4fdf-ba95-55b07560234e","type":"BasicTicker"}},"id":"79bc4426-9f7b-4768-9935-c13b9bda616f","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"d0b07351-279b-4920-87fc-befc9d412ec3","type":"Title"},{"attributes":{"callback":null},"id":"a38c9caa-e681-4d76-b1ed-5a0f5b146a22","type":"DataRange1d"},{"attributes":{},"id":"2626de40-0d6f-4fdf-ba95-55b07560234e","type":"BasicTicker"},{"attributes":{"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"}},"id":"c4329310-f1c5-4dcb-82d7-fb4b49f422ca","type":"ResetTool"},{"attributes":{"callback":null},"id":"92f477ff-8d12-4370-a906-484eeb1fca11","type":"DataRange1d"},{"attributes":{"plot":{"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"}},"id":"2c2c6894-2f18-49e3-b883-28bec1a39769","type":"SaveTool"},{"attributes":{"below":[{"id":"9062d6b2-321d-4ddb-8dda-c7950e2ef736","type":"LinearAxis"}],"left":[{"id":"676c3f22-cabd-47d8-893a-f93f77390ca8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9062d6b2-321d-4ddb-8dda-c7950e2ef736","type":"LinearAxis"},{"id":"a29b4612-1625-4a1c-8db5-3141e99acf7d","type":"Grid"},{"id":"676c3f22-cabd-47d8-893a-f93f77390ca8","type":"LinearAxis"},{"id":"79bc4426-9f7b-4768-9935-c13b9bda616f","type":"Grid"},{"id":"c372ce95-20f8-41cc-bedd-0911870afc82","type":"BoxAnnotation"},{"id":"2468c61c-20f7-4d0e-a8b6-0eb286d64fba","type":"GlyphRenderer"}],"title":{"id":"d0b07351-279b-4920-87fc-befc9d412ec3","type":"Title"},"tool_events":{"id":"965b26b1-fcd8-4c54-a54f-df37aacbdbb4","type":"ToolEvents"},"toolbar":{"id":"f8fe772c-8e88-4432-b5e0-c4d73bd4142a","type":"Toolbar"},"x_range":{"id":"a38c9caa-e681-4d76-b1ed-5a0f5b146a22","type":"DataRange1d"},"y_range":{"id":"92f477ff-8d12-4370-a906-484eeb1fca11","type":"DataRange1d"}},"id":"fd5d8f96-ff97-4387-9df7-93babfc83fc8","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"74a2ced2-2919-45ed-aae1-50979f8f039d","type":"MultiLine"},{"attributes":{"callback":null,"column_names":["xs","ys","line_alpha","line_color"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"e923f86a-d6e8-4fd9-b075-7b39f4f12fa2","type":"ColumnDataSource"}],"root_ids":["fd5d8f96-ff97-4387-9df7-93babfc83fc8"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"3f012e77-646e-4ebf-b5d5-b5a040c6cc13","elementid":"49927f31-4bdc-49d9-80d8-2dcba170a6c2","modelid":"fd5d8f96-ff97-4387-9df7-93babfc83fc8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
