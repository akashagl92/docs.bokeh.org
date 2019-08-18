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
      };var element = document.getElementById("5be8b386-4811-41b3-bc5e-5962de5a9cde");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5be8b386-4811-41b3-bc5e-5962de5a9cde' but no matching script tag was found. ")
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
                  var docs_json = {"f0fb7d69-b1a2-4c85-aad4-94aaf4713d3d":{"roots":{"references":[{"attributes":{"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"}},"id":"52bf4434-eb05-4ed3-974c-3de6dede0c00","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"6efb1133-ddc7-4e0e-ac1b-b4805a7beec7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5133debc-44ac-46b5-9ff6-a9ea1c3309a1","type":"BasicTickFormatter"},"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"},"ticker":{"id":"8411f347-6958-4fd7-b45a-dc441693ad49","type":"BasicTicker"}},"id":"17e29364-f15d-42f8-8fac-7bd87fc416ea","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f97a2f5a-70b4-4e29-bed0-6ef11ff83862","type":"Square"},{"attributes":{},"id":"cd356b55-7414-448d-8fed-5127f7b5ec46","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8de5e0f8-d565-4171-972f-93897f9badf8","type":"BasicTickFormatter"},"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd356b55-7414-448d-8fed-5127f7b5ec46","type":"BasicTicker"}},"id":"8a2a4e5c-d9d1-4b11-b797-0de84f051cd6","type":"LinearAxis"},{"attributes":{"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"}},"id":"fe84cfb3-a71b-4a06-84c5-aed48761cf6b","type":"HelpTool"},{"attributes":{"data_source":{"id":"55b6eb77-5e30-40d8-a6c2-82aceb210048","type":"ColumnDataSource"},"glyph":{"id":"ffabf5cd-1f24-4d87-be39-4b2bb1a52607","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"f97a2f5a-70b4-4e29-bed0-6ef11ff83862","type":"Square"},"selection_glyph":null},"id":"ba522ef8-e565-495a-bd53-da083d5b3a51","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"55b6eb77-5e30-40d8-a6c2-82aceb210048","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8cb3b82c-2354-4b08-bf5f-9c1af6c782cb","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"8cb3b82c-2354-4b08-bf5f-9c1af6c782cb","type":"BoxAnnotation"},"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"}},"id":"2604c107-af7d-4d90-b3ab-5eb94c42023b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"}},"id":"563d087d-b72c-4eca-99f7-d16655f5af29","type":"PanTool"},{"attributes":{},"id":"5133debc-44ac-46b5-9ff6-a9ea1c3309a1","type":"BasicTickFormatter"},{"attributes":{},"id":"4bb39c2c-7fc6-4839-82be-48b6367ee389","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"563d087d-b72c-4eca-99f7-d16655f5af29","type":"PanTool"},{"id":"52bf4434-eb05-4ed3-974c-3de6dede0c00","type":"WheelZoomTool"},{"id":"2604c107-af7d-4d90-b3ab-5eb94c42023b","type":"BoxZoomTool"},{"id":"f52c62d3-af29-4d1d-95c5-a2ee20038e6b","type":"SaveTool"},{"id":"468e767f-d27d-40a6-b73c-6e434160020d","type":"ResetTool"},{"id":"fe84cfb3-a71b-4a06-84c5-aed48761cf6b","type":"HelpTool"}]},"id":"8d3dae7a-798d-44f9-ba3c-6380b3c1e61d","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"d7df972f-df05-4966-99cd-512d755550e8","type":"Title"},{"attributes":{"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"}},"id":"f52c62d3-af29-4d1d-95c5-a2ee20038e6b","type":"SaveTool"},{"attributes":{"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd356b55-7414-448d-8fed-5127f7b5ec46","type":"BasicTicker"}},"id":"4524d385-f88b-4f40-857b-8e39234fa059","type":"Grid"},{"attributes":{},"id":"8411f347-6958-4fd7-b45a-dc441693ad49","type":"BasicTicker"},{"attributes":{"below":[{"id":"8a2a4e5c-d9d1-4b11-b797-0de84f051cd6","type":"LinearAxis"}],"left":[{"id":"17e29364-f15d-42f8-8fac-7bd87fc416ea","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8a2a4e5c-d9d1-4b11-b797-0de84f051cd6","type":"LinearAxis"},{"id":"4524d385-f88b-4f40-857b-8e39234fa059","type":"Grid"},{"id":"17e29364-f15d-42f8-8fac-7bd87fc416ea","type":"LinearAxis"},{"id":"57e00e76-8aa5-4af5-89cd-e48a26978dd2","type":"Grid"},{"id":"8cb3b82c-2354-4b08-bf5f-9c1af6c782cb","type":"BoxAnnotation"},{"id":"ba522ef8-e565-495a-bd53-da083d5b3a51","type":"GlyphRenderer"}],"title":{"id":"d7df972f-df05-4966-99cd-512d755550e8","type":"Title"},"tool_events":{"id":"4bb39c2c-7fc6-4839-82be-48b6367ee389","type":"ToolEvents"},"toolbar":{"id":"8d3dae7a-798d-44f9-ba3c-6380b3c1e61d","type":"Toolbar"},"x_range":{"id":"86b1b1a8-c80b-4bee-b82c-3b374112d981","type":"DataRange1d"},"y_range":{"id":"6efb1133-ddc7-4e0e-ac1b-b4805a7beec7","type":"DataRange1d"}},"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"86b1b1a8-c80b-4bee-b82c-3b374112d981","type":"DataRange1d"},{"attributes":{},"id":"8de5e0f8-d565-4171-972f-93897f9badf8","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffabf5cd-1f24-4d87-be39-4b2bb1a52607","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"},"ticker":{"id":"8411f347-6958-4fd7-b45a-dc441693ad49","type":"BasicTicker"}},"id":"57e00e76-8aa5-4af5-89cd-e48a26978dd2","type":"Grid"},{"attributes":{"plot":{"id":"ad10eb33-58db-4ac8-9578-426ef5e52325","subtype":"Figure","type":"Plot"}},"id":"468e767f-d27d-40a6-b73c-6e434160020d","type":"ResetTool"}],"root_ids":["ad10eb33-58db-4ac8-9578-426ef5e52325"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"f0fb7d69-b1a2-4c85-aad4-94aaf4713d3d","elementid":"5be8b386-4811-41b3-bc5e-5962de5a9cde","modelid":"ad10eb33-58db-4ac8-9578-426ef5e52325"}];
                  
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