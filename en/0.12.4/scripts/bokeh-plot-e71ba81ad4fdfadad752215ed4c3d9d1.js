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
      };var element = document.getElementById("2dece26a-7450-4da3-bb18-c0fe2e3e8663");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2dece26a-7450-4da3-bb18-c0fe2e3e8663' but no matching script tag was found. ")
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
                var docs_json = {"f08231e4-739b-4c9a-a600-1aa26252366c":{"roots":{"references":[{"attributes":{"below":[{"id":"7c75bdbe-fa0f-4160-acb2-8407cad2dd26","type":"LinearAxis"}],"left":[{"id":"a224b599-8bdd-454f-82b1-398b67c76a60","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7c75bdbe-fa0f-4160-acb2-8407cad2dd26","type":"LinearAxis"},{"id":"a200c01c-3d4a-472f-9c41-9adc11d3cac2","type":"Grid"},{"id":"a224b599-8bdd-454f-82b1-398b67c76a60","type":"LinearAxis"},{"id":"d05f88ac-8349-4ef5-892b-805ae6e6ac73","type":"Grid"},{"id":"12c6dcab-4bec-4f62-b0c6-3d4d8c8f1aa6","type":"BoxAnnotation"},{"id":"0108a831-15a4-4f2c-9ff1-577e4d14f594","type":"GlyphRenderer"}],"title":{"id":"649265e4-abc1-4487-8fe7-fa81229f7725","type":"Title"},"title_location":"left","tool_events":{"id":"ecdf279e-5e17-49f9-8303-6de2d56a1a91","type":"ToolEvents"},"toolbar":{"id":"99a2c6fe-4bde-483f-b071-bf45b73c7110","type":"Toolbar"},"x_range":{"id":"572ee63a-8600-4909-b48f-185a72b146a8","type":"DataRange1d"},"y_range":{"id":"6b7d43de-eb14-4d5e-bb86-1b3070eb742a","type":"DataRange1d"}},"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"987fdb91-8819-4b2d-9d1e-f0a89f946029","type":"BasicTickFormatter"},"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"},"ticker":{"id":"5dda8ced-3f1c-41fa-ba76-8349cb928631","type":"BasicTicker"}},"id":"a224b599-8bdd-454f-82b1-398b67c76a60","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48c78fa9-efe5-4ca0-83b3-d847771ceb9d","type":"Circle"},{"attributes":{"callback":null},"id":"6b7d43de-eb14-4d5e-bb86-1b3070eb742a","type":"DataRange1d"},{"attributes":{},"id":"5dda8ced-3f1c-41fa-ba76-8349cb928631","type":"BasicTicker"},{"attributes":{"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"},"ticker":{"id":"2477593f-8f22-44b4-ab6e-c48a7b90d02e","type":"BasicTicker"}},"id":"a200c01c-3d4a-472f-9c41-9adc11d3cac2","type":"Grid"},{"attributes":{},"id":"ecdf279e-5e17-49f9-8303-6de2d56a1a91","type":"ToolEvents"},{"attributes":{"overlay":{"id":"12c6dcab-4bec-4f62-b0c6-3d4d8c8f1aa6","type":"BoxAnnotation"},"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"}},"id":"5902dec8-d863-4be1-96a4-c8001bc007a9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"}},"id":"24c9d0d9-cc97-4d0e-8f27-966235b12f50","type":"PanTool"},{"attributes":{"data_source":{"id":"74f98f83-fafd-483a-8b3e-dc4c58f1023a","type":"ColumnDataSource"},"glyph":{"id":"7e5a83d5-4425-415e-b504-576be86cc2df","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"48c78fa9-efe5-4ca0-83b3-d847771ceb9d","type":"Circle"},"selection_glyph":null},"id":"0108a831-15a4-4f2c-9ff1-577e4d14f594","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"24c9d0d9-cc97-4d0e-8f27-966235b12f50","type":"PanTool"},{"id":"9bd02cc1-27ae-4b67-8aa1-ed91654da381","type":"WheelZoomTool"},{"id":"5902dec8-d863-4be1-96a4-c8001bc007a9","type":"BoxZoomTool"},{"id":"0fc6c1dc-604e-4259-b859-8ecd6f0fb61e","type":"SaveTool"},{"id":"23d33d6e-e32b-4891-a49e-88d8f4bffe78","type":"ResetTool"},{"id":"9f3030d8-5164-4e87-9db5-1ca18eb74434","type":"HelpTool"}]},"id":"99a2c6fe-4bde-483f-b071-bf45b73c7110","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"},"ticker":{"id":"5dda8ced-3f1c-41fa-ba76-8349cb928631","type":"BasicTicker"}},"id":"d05f88ac-8349-4ef5-892b-805ae6e6ac73","type":"Grid"},{"attributes":{"formatter":{"id":"9789465c-b15b-4127-98b6-7ff76ca9086b","type":"BasicTickFormatter"},"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"},"ticker":{"id":"2477593f-8f22-44b4-ab6e-c48a7b90d02e","type":"BasicTicker"}},"id":"7c75bdbe-fa0f-4160-acb2-8407cad2dd26","type":"LinearAxis"},{"attributes":{"callback":null},"id":"572ee63a-8600-4909-b48f-185a72b146a8","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e5a83d5-4425-415e-b504-576be86cc2df","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12c6dcab-4bec-4f62-b0c6-3d4d8c8f1aa6","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Left Title"},"id":"649265e4-abc1-4487-8fe7-fa81229f7725","type":"Title"},{"attributes":{},"id":"9789465c-b15b-4127-98b6-7ff76ca9086b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"}},"id":"9bd02cc1-27ae-4b67-8aa1-ed91654da381","type":"WheelZoomTool"},{"attributes":{},"id":"987fdb91-8819-4b2d-9d1e-f0a89f946029","type":"BasicTickFormatter"},{"attributes":{},"id":"2477593f-8f22-44b4-ab6e-c48a7b90d02e","type":"BasicTicker"},{"attributes":{"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"}},"id":"9f3030d8-5164-4e87-9db5-1ca18eb74434","type":"HelpTool"},{"attributes":{"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"}},"id":"23d33d6e-e32b-4891-a49e-88d8f4bffe78","type":"ResetTool"},{"attributes":{"plot":{"id":"bf504347-eaf7-4452-8117-6e26b602cb41","subtype":"Figure","type":"Plot"}},"id":"0fc6c1dc-604e-4259-b859-8ecd6f0fb61e","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"74f98f83-fafd-483a-8b3e-dc4c58f1023a","type":"ColumnDataSource"}],"root_ids":["bf504347-eaf7-4452-8117-6e26b602cb41"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f08231e4-739b-4c9a-a600-1aa26252366c","elementid":"2dece26a-7450-4da3-bb18-c0fe2e3e8663","modelid":"bf504347-eaf7-4452-8117-6e26b602cb41"}];
                
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
