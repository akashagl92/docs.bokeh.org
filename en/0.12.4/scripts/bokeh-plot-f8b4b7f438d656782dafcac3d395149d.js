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
      };var element = document.getElementById("be89d429-a9aa-4063-9c22-f9018ce2d8a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be89d429-a9aa-4063-9c22-f9018ce2d8a5' but no matching script tag was found. ")
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
                var docs_json = {"e1c70c24-6227-4ec9-ab05-eddba3e3fb59":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3b42c57-2f20-4251-9122-a2b16e7ef4ee","type":"Circle"},{"attributes":{},"id":"1a5e48dc-dadc-45c7-84d6-8dc45ba54d9b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"}},"id":"987b25ef-ccbe-4a0f-a18d-fbc268baf321","type":"WheelZoomTool"},{"attributes":{},"id":"347cca56-0205-4877-b68e-8fdb412584f9","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"521eb8fd-d5d9-4f3c-ab7d-43573e9d468d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"}},"id":"8efbcdd3-65df-4795-bb24-405feb08fca8","type":"HelpTool"},{"attributes":{"formatter":{"id":"1a5e48dc-dadc-45c7-84d6-8dc45ba54d9b","type":"BasicTickFormatter"},"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ee04521-fa64-480a-a423-c9d6d77bff53","type":"BasicTicker"}},"id":"e9097847-b6b7-48b8-a01b-3c6dfa1497e0","type":"LinearAxis"},{"attributes":{"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ee04521-fa64-480a-a423-c9d6d77bff53","type":"BasicTicker"}},"id":"2605fda2-c38d-4df4-b2ca-a1a385892b3d","type":"Grid"},{"attributes":{},"id":"8ee04521-fa64-480a-a423-c9d6d77bff53","type":"BasicTicker"},{"attributes":{"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"}},"id":"b7217f6d-cbd6-43b0-9b1a-81e313b87620","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"df40274d-5643-4184-a4ae-d33661b5b697","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"4be2648f-3adf-4f72-adc8-ce084854119b","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"97b43fc7-1e75-4dad-ab3c-b18309dbde25","type":"BasicTickFormatter"},"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"347cca56-0205-4877-b68e-8fdb412584f9","type":"BasicTicker"}},"id":"7ee76c63-4af6-4262-b2e7-2f7f3d45c6bb","type":"LinearAxis"},{"attributes":{"overlay":{"id":"521eb8fd-d5d9-4f3c-ab7d-43573e9d468d","type":"BoxAnnotation"},"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"}},"id":"ea49c047-9a9e-46b7-a0f7-dd6a18e10bb0","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":15},"id":"d8523ef6-163f-4f41-a8f6-7f27a4e58d8a","type":"Range1d"},{"attributes":{"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"}},"id":"c0731241-28fa-4de0-8205-b5c20c666a0a","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d666267d-f86d-4b2f-9539-98edff8eea19","type":"Circle"},{"attributes":{"data_source":{"id":"4be2648f-3adf-4f72-adc8-ce084854119b","type":"ColumnDataSource"},"glyph":{"id":"b3b42c57-2f20-4251-9122-a2b16e7ef4ee","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d666267d-f86d-4b2f-9539-98edff8eea19","type":"Circle"},"selection_glyph":null},"id":"953718f1-2944-4165-9c19-176261964842","type":"GlyphRenderer"},{"attributes":{},"id":"47b389f4-b446-4208-b874-ea2bee9b37c2","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"347cca56-0205-4877-b68e-8fdb412584f9","type":"BasicTicker"}},"id":"3ca89648-50ab-49f1-ace0-ad508acf7cd0","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c0731241-28fa-4de0-8205-b5c20c666a0a","type":"PanTool"},{"id":"987b25ef-ccbe-4a0f-a18d-fbc268baf321","type":"WheelZoomTool"},{"id":"ea49c047-9a9e-46b7-a0f7-dd6a18e10bb0","type":"BoxZoomTool"},{"id":"5a39f007-7c97-48db-91c4-1218defc23ff","type":"SaveTool"},{"id":"b7217f6d-cbd6-43b0-9b1a-81e313b87620","type":"ResetTool"},{"id":"8efbcdd3-65df-4795-bb24-405feb08fca8","type":"HelpTool"}]},"id":"527fa106-c68f-48b2-9bf9-ce6727e718fe","type":"Toolbar"},{"attributes":{"below":[{"id":"e9097847-b6b7-48b8-a01b-3c6dfa1497e0","type":"LinearAxis"}],"left":[{"id":"7ee76c63-4af6-4262-b2e7-2f7f3d45c6bb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e9097847-b6b7-48b8-a01b-3c6dfa1497e0","type":"LinearAxis"},{"id":"2605fda2-c38d-4df4-b2ca-a1a385892b3d","type":"Grid"},{"id":"7ee76c63-4af6-4262-b2e7-2f7f3d45c6bb","type":"LinearAxis"},{"id":"3ca89648-50ab-49f1-ace0-ad508acf7cd0","type":"Grid"},{"id":"521eb8fd-d5d9-4f3c-ab7d-43573e9d468d","type":"BoxAnnotation"},{"id":"953718f1-2944-4165-9c19-176261964842","type":"GlyphRenderer"}],"title":{"id":"df40274d-5643-4184-a4ae-d33661b5b697","type":"Title"},"tool_events":{"id":"47b389f4-b446-4208-b874-ea2bee9b37c2","type":"ToolEvents"},"toolbar":{"id":"527fa106-c68f-48b2-9bf9-ce6727e718fe","type":"Toolbar"},"x_range":{"id":"49b4dc69-e216-4c91-b4f2-80816cd70510","type":"Range1d"},"y_range":{"id":"d8523ef6-163f-4f41-a8f6-7f27a4e58d8a","type":"Range1d"}},"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":20},"id":"49b4dc69-e216-4c91-b4f2-80816cd70510","type":"Range1d"},{"attributes":{},"id":"97b43fc7-1e75-4dad-ab3c-b18309dbde25","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"85a011dc-44d7-4ad9-bb40-8722fb7804fd","subtype":"Figure","type":"Plot"}},"id":"5a39f007-7c97-48db-91c4-1218defc23ff","type":"SaveTool"}],"root_ids":["85a011dc-44d7-4ad9-bb40-8722fb7804fd"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"e1c70c24-6227-4ec9-ab05-eddba3e3fb59","elementid":"be89d429-a9aa-4063-9c22-f9018ce2d8a5","modelid":"85a011dc-44d7-4ad9-bb40-8722fb7804fd"}];
                
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
