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
      };var element = document.getElementById("82c8b821-438e-4262-8904-b53c95f7288a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82c8b821-438e-4262-8904-b53c95f7288a' but no matching script tag was found. ")
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
                var docs_json = {"ba58df98-956f-4976-9a24-b36371aa55f6":{"roots":{"references":[{"attributes":{"formatter":{"id":"ce88591e-fbf3-4aa3-8788-779cb3941bec","type":"BasicTickFormatter"},"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"},"ticker":{"id":"6765dd3b-725e-48a7-9231-d82e381b1e2e","type":"BasicTicker"}},"id":"a9bc9572-2f00-4a12-a1a8-d9d27d14797a","type":"LinearAxis"},{"attributes":{"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"}},"id":"a01e1f38-34f3-4347-8b00-04fce009040a","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"291c4c7d-55e8-48d5-a749-c12ccf81cd15","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"0dd9b185-9306-4ef4-ad30-11904233a615","type":"DataRange1d"},{"attributes":{"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"}},"id":"506c2b2f-1ccd-481c-ac78-4815266b1cc2","type":"ResetTool"},{"attributes":{},"id":"51259870-8f03-42ff-9ea9-2b5cd1e5825a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"62fc48ae-746b-45ae-933c-e16e57bd08a5","type":"PanTool"},{"id":"71e0114e-8ceb-4015-990b-9fe2a5d872c1","type":"WheelZoomTool"},{"id":"b770e5ef-ab36-4c64-bbf0-feda414bc383","type":"BoxZoomTool"},{"id":"a01e1f38-34f3-4347-8b00-04fce009040a","type":"SaveTool"},{"id":"506c2b2f-1ccd-481c-ac78-4815266b1cc2","type":"ResetTool"},{"id":"48da8d72-2681-44b8-8e7c-fe49bb06e3ad","type":"HelpTool"}]},"id":"3180b715-dcb0-4027-82f8-95f35f02ba20","type":"Toolbar"},{"attributes":{"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"}},"id":"62fc48ae-746b-45ae-933c-e16e57bd08a5","type":"PanTool"},{"attributes":{"formatter":{"id":"51259870-8f03-42ff-9ea9-2b5cd1e5825a","type":"BasicTickFormatter"},"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"},"ticker":{"id":"580611c5-54a2-4301-bafe-b9e14337cdf5","type":"BasicTicker"}},"id":"f9224b78-2d3d-4bd0-adc9-26c6ddf454cd","type":"LinearAxis"},{"attributes":{"callback":null},"id":"657e7597-a575-4f46-bf8f-2bdcf6b1a306","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8db8e18c-7ec7-45ad-b644-9b5731ef98ec","type":"Circle"},{"attributes":{},"id":"de0cf7bd-18d3-439d-8016-3d1b39b654d7","type":"ToolEvents"},{"attributes":{},"id":"ce88591e-fbf3-4aa3-8788-779cb3941bec","type":"BasicTickFormatter"},{"attributes":{"align":"center","plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"5ec78a17-9409-47c5-891d-65b9d8268bff","type":"Title"},{"attributes":{},"id":"580611c5-54a2-4301-bafe-b9e14337cdf5","type":"BasicTicker"},{"attributes":{"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"}},"id":"71e0114e-8ceb-4015-990b-9fe2a5d872c1","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"291c4c7d-55e8-48d5-a749-c12ccf81cd15","type":"BoxAnnotation"},"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"}},"id":"b770e5ef-ab36-4c64-bbf0-feda414bc383","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"}},"id":"48da8d72-2681-44b8-8e7c-fe49bb06e3ad","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"},"ticker":{"id":"580611c5-54a2-4301-bafe-b9e14337cdf5","type":"BasicTicker"}},"id":"e3d6ff9c-1d5b-4b1b-8def-254828115035","type":"Grid"},{"attributes":{"data_source":{"id":"71ce5638-c880-4af7-9a49-68a4d5735fb1","type":"ColumnDataSource"},"glyph":{"id":"22847aba-23c3-4e30-9d1f-0c0043b63a17","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8db8e18c-7ec7-45ad-b644-9b5731ef98ec","type":"Circle"},"selection_glyph":null},"id":"96facc36-583b-48b2-bf14-e1df835617b9","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Left Title"},"id":"2529c334-fe25-44f5-9fd1-34a0f05f6854","type":"Title"},{"attributes":{"plot":{"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"},"ticker":{"id":"6765dd3b-725e-48a7-9231-d82e381b1e2e","type":"BasicTicker"}},"id":"d159263d-c216-4aed-8c5d-143664a1f91d","type":"Grid"},{"attributes":{},"id":"6765dd3b-725e-48a7-9231-d82e381b1e2e","type":"BasicTicker"},{"attributes":{"below":[{"id":"a9bc9572-2f00-4a12-a1a8-d9d27d14797a","type":"LinearAxis"},{"id":"5ec78a17-9409-47c5-891d-65b9d8268bff","type":"Title"}],"left":[{"id":"f9224b78-2d3d-4bd0-adc9-26c6ddf454cd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a9bc9572-2f00-4a12-a1a8-d9d27d14797a","type":"LinearAxis"},{"id":"d159263d-c216-4aed-8c5d-143664a1f91d","type":"Grid"},{"id":"f9224b78-2d3d-4bd0-adc9-26c6ddf454cd","type":"LinearAxis"},{"id":"e3d6ff9c-1d5b-4b1b-8def-254828115035","type":"Grid"},{"id":"291c4c7d-55e8-48d5-a749-c12ccf81cd15","type":"BoxAnnotation"},{"id":"96facc36-583b-48b2-bf14-e1df835617b9","type":"GlyphRenderer"},{"id":"5ec78a17-9409-47c5-891d-65b9d8268bff","type":"Title"}],"title":{"id":"2529c334-fe25-44f5-9fd1-34a0f05f6854","type":"Title"},"title_location":"left","tool_events":{"id":"de0cf7bd-18d3-439d-8016-3d1b39b654d7","type":"ToolEvents"},"toolbar":{"id":"3180b715-dcb0-4027-82f8-95f35f02ba20","type":"Toolbar"},"x_range":{"id":"0dd9b185-9306-4ef4-ad30-11904233a615","type":"DataRange1d"},"y_range":{"id":"657e7597-a575-4f46-bf8f-2bdcf6b1a306","type":"DataRange1d"}},"id":"a9067cac-20eb-450f-9e46-94d03c90d082","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22847aba-23c3-4e30-9d1f-0c0043b63a17","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"71ce5638-c880-4af7-9a49-68a4d5735fb1","type":"ColumnDataSource"}],"root_ids":["a9067cac-20eb-450f-9e46-94d03c90d082"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"ba58df98-956f-4976-9a24-b36371aa55f6","elementid":"82c8b821-438e-4262-8904-b53c95f7288a","modelid":"a9067cac-20eb-450f-9e46-94d03c90d082"}];
                
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
