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
      };var element = document.getElementById("80939187-8e6d-46f3-a2ed-06d290b2cf39");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '80939187-8e6d-46f3-a2ed-06d290b2cf39' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9e72cd1f-de6e-49f4-8090-9f9972a69a29":{"roots":{"references":[{"attributes":{"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}},"id":"43709182-aca3-4f5d-8430-65183945c6c4","type":"SaveTool"},{"attributes":{"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}},"id":"70f3d330-769a-4d45-ad63-f1cb87ae2dbc","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"538f41ac-c529-4a06-b30a-8ca32ddf1756","type":"BasicTicker"}},"id":"706f06bd-a189-4884-8463-1b5ae02f436c","type":"Grid"},{"attributes":{},"id":"c3e1f8cc-1f29-4eeb-b479-7ba542c74c71","type":"BasicTicker"},{"attributes":{},"id":"9f5cd8f6-9cb7-499b-9e2b-8f1058ae6614","type":"ToolEvents"},{"attributes":{"data_source":{"id":"db6236bd-b1b0-4a6f-ac4e-4ab5466eac24","type":"ColumnDataSource"},"glyph":{"id":"cdc02ad3-782f-4112-ad02-b15ae451ecd8","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"170f8eae-6774-4ce4-8f8c-b002dd36b513","type":"Circle"},"selection_glyph":null},"id":"4ae893f1-4596-4915-a4be-d541163a519e","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"86f0de50-6939-4c2d-b7c3-cbe1388cc4dc","type":"BasicTickFormatter"},"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3e1f8cc-1f29-4eeb-b479-7ba542c74c71","type":"BasicTicker"}},"id":"ae77978e-0cc3-42b1-a19b-3533bc12388b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"61e9927f-c89b-40c4-854d-6bb993fe30cb","type":"BasicTickFormatter"},"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"538f41ac-c529-4a06-b30a-8ca32ddf1756","type":"BasicTicker"}},"id":"6645c65e-6189-45ca-9593-144e6b8cfcfd","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"db6236bd-b1b0-4a6f-ac4e-4ab5466eac24","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"170f8eae-6774-4ce4-8f8c-b002dd36b513","type":"Circle"},{"attributes":{},"id":"86f0de50-6939-4c2d-b7c3-cbe1388cc4dc","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7380a623-7041-4918-b50d-5bf7ddf3ab2b","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}},"id":"a8aef9f4-0525-4a8e-a331-4ce48851a581","type":"PanTool"},{"attributes":{"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}},"id":"63c47c49-f735-4943-9723-e4748d7e10a1","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"61c0526e-6547-4637-b02d-5f74ea26a2c9","type":"Title"},{"attributes":{},"id":"538f41ac-c529-4a06-b30a-8ca32ddf1756","type":"BasicTicker"},{"attributes":{"callback":null},"id":"54ec3d8a-48d3-490e-bd1f-7fafe748a4e5","type":"DataRange1d"},{"attributes":{"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}},"id":"5e042048-8a0c-4548-84d7-5c35486cf073","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a8aef9f4-0525-4a8e-a331-4ce48851a581","type":"PanTool"},{"id":"5e042048-8a0c-4548-84d7-5c35486cf073","type":"WheelZoomTool"},{"id":"2d140cfe-6372-4761-b511-148e262bea16","type":"BoxZoomTool"},{"id":"43709182-aca3-4f5d-8430-65183945c6c4","type":"SaveTool"},{"id":"63c47c49-f735-4943-9723-e4748d7e10a1","type":"ResetTool"},{"id":"70f3d330-769a-4d45-ad63-f1cb87ae2dbc","type":"HelpTool"}]},"id":"ff03c922-69d0-4e5b-a71e-36439aa2ade6","type":"Toolbar"},{"attributes":{"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3e1f8cc-1f29-4eeb-b479-7ba542c74c71","type":"BasicTicker"}},"id":"bfe72cf3-3e09-4139-9100-9db03bf3215a","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdc02ad3-782f-4112-ad02-b15ae451ecd8","type":"Circle"},{"attributes":{"callback":null},"id":"3762f504-26f6-41ef-9b7c-9b27e7fe4af8","type":"DataRange1d"},{"attributes":{},"id":"61e9927f-c89b-40c4-854d-6bb993fe30cb","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7380a623-7041-4918-b50d-5bf7ddf3ab2b","type":"BoxAnnotation"},"plot":{"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}},"id":"2d140cfe-6372-4761-b511-148e262bea16","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"ae77978e-0cc3-42b1-a19b-3533bc12388b","type":"LinearAxis"}],"left":[{"id":"6645c65e-6189-45ca-9593-144e6b8cfcfd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ae77978e-0cc3-42b1-a19b-3533bc12388b","type":"LinearAxis"},{"id":"bfe72cf3-3e09-4139-9100-9db03bf3215a","type":"Grid"},{"id":"6645c65e-6189-45ca-9593-144e6b8cfcfd","type":"LinearAxis"},{"id":"706f06bd-a189-4884-8463-1b5ae02f436c","type":"Grid"},{"id":"7380a623-7041-4918-b50d-5bf7ddf3ab2b","type":"BoxAnnotation"},{"id":"4ae893f1-4596-4915-a4be-d541163a519e","type":"GlyphRenderer"}],"title":{"id":"61c0526e-6547-4637-b02d-5f74ea26a2c9","type":"Title"},"tool_events":{"id":"9f5cd8f6-9cb7-499b-9e2b-8f1058ae6614","type":"ToolEvents"},"toolbar":{"id":"ff03c922-69d0-4e5b-a71e-36439aa2ade6","type":"Toolbar"},"x_range":{"id":"54ec3d8a-48d3-490e-bd1f-7fafe748a4e5","type":"DataRange1d"},"y_range":{"id":"3762f504-26f6-41ef-9b7c-9b27e7fe4af8","type":"DataRange1d"}},"id":"8918f785-6119-45d3-a8e0-9b12c04eb8d8","subtype":"Figure","type":"Plot"}],"root_ids":["8918f785-6119-45d3-a8e0-9b12c04eb8d8"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"9e72cd1f-de6e-49f4-8090-9f9972a69a29","elementid":"80939187-8e6d-46f3-a2ed-06d290b2cf39","modelid":"8918f785-6119-45d3-a8e0-9b12c04eb8d8"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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