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
      };var element = document.getElementById("66a454c4-1384-416d-b301-0e63030db825");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66a454c4-1384-416d-b301-0e63030db825' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"1673b93d-67d8-4a2c-846e-57c7a9264c39":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["xs","ys","line_color","fill_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"2cf43db5-54f5-4a65-9b26-cd2060911c61","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3be6fc58-8e63-466d-a49a-3905ef9e4027","type":"BasicTickFormatter"},"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"48b33729-f2f9-4802-a203-23afbd7686a4","type":"BasicTicker"}},"id":"8b6b876b-34f8-4b10-af2f-50131e7fbcc1","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"372dfc48-ecd6-494c-8b90-06fc8904933e","type":"PanTool"},{"id":"418ac985-b960-468b-9230-1bdaddc1853f","type":"WheelZoomTool"},{"id":"9430fcdf-cae6-4497-b72b-1663c37bd331","type":"BoxZoomTool"},{"id":"cbeb1f9f-33e9-4513-b4f7-52123320b08e","type":"SaveTool"},{"id":"0f8b127d-44fd-46ec-96ce-a7d0da4b753e","type":"ResetTool"},{"id":"23c6cbe1-cf39-4a18-9755-db0d2c14ef3f","type":"HelpTool"}]},"id":"4f230419-d05c-43d3-98a1-a1b42fa77a88","type":"Toolbar"},{"attributes":{"overlay":{"id":"81eb96cd-f3c2-4d4e-b3df-9175e6a1c73a","type":"BoxAnnotation"},"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"}},"id":"9430fcdf-cae6-4497-b72b-1663c37bd331","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"81eb96cd-f3c2-4d4e-b3df-9175e6a1c73a","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"78acd4a1-0e4a-47c3-b93f-014c76abb541","type":"Patches"},{"attributes":{"dimension":1,"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"48b33729-f2f9-4802-a203-23afbd7686a4","type":"BasicTicker"}},"id":"10812f1a-a2f4-484e-9b72-0dbe90fe22b3","type":"Grid"},{"attributes":{"callback":null},"id":"c981579a-fb92-407b-a953-c6b6a2ba46d9","type":"DataRange1d"},{"attributes":{"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"}},"id":"23c6cbe1-cf39-4a18-9755-db0d2c14ef3f","type":"HelpTool"},{"attributes":{},"id":"3be6fc58-8e63-466d-a49a-3905ef9e4027","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"458e53bf-1554-46d1-af2e-760842209479","type":"BasicTicker"}},"id":"b2b5a6c2-3383-48b6-9f38-88b31c466c05","type":"Grid"},{"attributes":{},"id":"0ed01b67-0d6d-40ff-a3c6-33fd4eb33824","type":"ToolEvents"},{"attributes":{"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"}},"id":"372dfc48-ecd6-494c-8b90-06fc8904933e","type":"PanTool"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"2e8dcbd5-869e-4104-8f9b-8def22cadc4e","type":"Patches"},{"attributes":{"data_source":{"id":"2cf43db5-54f5-4a65-9b26-cd2060911c61","type":"ColumnDataSource"},"glyph":{"id":"2e8dcbd5-869e-4104-8f9b-8def22cadc4e","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"78acd4a1-0e4a-47c3-b93f-014c76abb541","type":"Patches"},"selection_glyph":null},"id":"5190802e-513a-43f0-955e-46b04c0ec35c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"}},"id":"cbeb1f9f-33e9-4513-b4f7-52123320b08e","type":"SaveTool"},{"attributes":{"callback":null},"id":"e77e2f4c-a890-49b3-8b19-0f92200c958a","type":"DataRange1d"},{"attributes":{"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"}},"id":"418ac985-b960-468b-9230-1bdaddc1853f","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"abf8bd7d-610e-48ba-bb69-602d1b6feefc","type":"Title"},{"attributes":{"below":[{"id":"d900d00c-12ad-4ca6-9666-fddb1b5bb6bd","type":"LinearAxis"}],"left":[{"id":"8b6b876b-34f8-4b10-af2f-50131e7fbcc1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d900d00c-12ad-4ca6-9666-fddb1b5bb6bd","type":"LinearAxis"},{"id":"b2b5a6c2-3383-48b6-9f38-88b31c466c05","type":"Grid"},{"id":"8b6b876b-34f8-4b10-af2f-50131e7fbcc1","type":"LinearAxis"},{"id":"10812f1a-a2f4-484e-9b72-0dbe90fe22b3","type":"Grid"},{"id":"81eb96cd-f3c2-4d4e-b3df-9175e6a1c73a","type":"BoxAnnotation"},{"id":"5190802e-513a-43f0-955e-46b04c0ec35c","type":"GlyphRenderer"}],"title":{"id":"abf8bd7d-610e-48ba-bb69-602d1b6feefc","type":"Title"},"tool_events":{"id":"0ed01b67-0d6d-40ff-a3c6-33fd4eb33824","type":"ToolEvents"},"toolbar":{"id":"4f230419-d05c-43d3-98a1-a1b42fa77a88","type":"Toolbar"},"x_range":{"id":"e77e2f4c-a890-49b3-8b19-0f92200c958a","type":"DataRange1d"},"y_range":{"id":"c981579a-fb92-407b-a953-c6b6a2ba46d9","type":"DataRange1d"}},"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0e5ed278-363b-4fb2-a0e9-bee481573f73","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0e5ed278-363b-4fb2-a0e9-bee481573f73","type":"BasicTickFormatter"},"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"458e53bf-1554-46d1-af2e-760842209479","type":"BasicTicker"}},"id":"d900d00c-12ad-4ca6-9666-fddb1b5bb6bd","type":"LinearAxis"},{"attributes":{"plot":{"id":"487c1e14-42ab-48d7-b494-58e26a2c2a48","subtype":"Figure","type":"Plot"}},"id":"0f8b127d-44fd-46ec-96ce-a7d0da4b753e","type":"ResetTool"},{"attributes":{},"id":"458e53bf-1554-46d1-af2e-760842209479","type":"BasicTicker"},{"attributes":{},"id":"48b33729-f2f9-4802-a203-23afbd7686a4","type":"BasicTicker"}],"root_ids":["487c1e14-42ab-48d7-b494-58e26a2c2a48"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"1673b93d-67d8-4a2c-846e-57c7a9264c39","elementid":"66a454c4-1384-416d-b301-0e63030db825","modelid":"487c1e14-42ab-48d7-b494-58e26a2c2a48"}];
              
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