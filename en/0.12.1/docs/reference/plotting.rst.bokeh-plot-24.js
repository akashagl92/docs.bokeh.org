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
      };var element = document.getElementById("91b5d145-9bed-4c38-91b7-fa2ba310358a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91b5d145-9bed-4c38-91b7-fa2ba310358a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"edd1a278-0e1f-4ef5-b79f-4cb9c2a1c36d":{"roots":{"references":[{"attributes":{"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"}},"id":"39b1e6e5-4ff4-4593-8867-50d97e454bcb","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"cb11a9a2-d826-4311-abc6-e068a7a2461b","type":"DataRange1d"},{"attributes":{"below":[{"id":"42c2a847-7451-4b3f-aef3-c2d41fde8289","type":"LinearAxis"}],"left":[{"id":"e9598b4c-144e-46ac-8177-dc4f84ea3538","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"42c2a847-7451-4b3f-aef3-c2d41fde8289","type":"LinearAxis"},{"id":"0165df41-b008-4242-8cc0-ce1aac9ce322","type":"Grid"},{"id":"e9598b4c-144e-46ac-8177-dc4f84ea3538","type":"LinearAxis"},{"id":"7c1f1d96-6ca4-40e7-a6d6-fc0fe1f6fcd6","type":"Grid"},{"id":"27290e50-2fd0-42a4-bc0e-fa2a70c64f46","type":"BoxAnnotation"},{"id":"9a85d620-e716-40c4-b7c7-459be1a344f5","type":"GlyphRenderer"}],"title":{"id":"48d9cc3f-0a23-4178-a247-48c1b5f54ef0","type":"Title"},"tool_events":{"id":"43620972-64ac-4d0b-b62a-4fd7d0a3d9d0","type":"ToolEvents"},"toolbar":{"id":"626ca7d5-3799-4404-ab2e-dfb3a8560af0","type":"Toolbar"},"x_range":{"id":"15418bdc-f50f-4cff-a936-490df934c58e","type":"DataRange1d"},"y_range":{"id":"cb11a9a2-d826-4311-abc6-e068a7a2461b","type":"DataRange1d"}},"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4b1c687-f14e-49af-9496-9e067a3d1a8d","type":"BasicTicker"}},"id":"0165df41-b008-4242-8cc0-ce1aac9ce322","type":"Grid"},{"attributes":{},"id":"26801a65-e992-4fb5-a920-98feff17039a","type":"BasicTicker"},{"attributes":{},"id":"72d41071-1969-4395-ab15-eef0cf555325","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"}},"id":"d39d778c-bf9a-4eca-907b-bcf9219eb252","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"26801a65-e992-4fb5-a920-98feff17039a","type":"BasicTicker"}},"id":"7c1f1d96-6ca4-40e7-a6d6-fc0fe1f6fcd6","type":"Grid"},{"attributes":{"formatter":{"id":"27ece2fa-d085-4943-927c-f307763c7cce","type":"BasicTickFormatter"},"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"26801a65-e992-4fb5-a920-98feff17039a","type":"BasicTicker"}},"id":"e9598b4c-144e-46ac-8177-dc4f84ea3538","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d39d778c-bf9a-4eca-907b-bcf9219eb252","type":"PanTool"},{"id":"39b1e6e5-4ff4-4593-8867-50d97e454bcb","type":"WheelZoomTool"},{"id":"8dd9a7b6-79a3-4860-8f5b-df4bc5ad4863","type":"BoxZoomTool"},{"id":"3ea0ee28-1ddd-468c-b544-19c994b44eb5","type":"SaveTool"},{"id":"076cc961-2fcb-4590-b410-07f2a06ba948","type":"ResetTool"},{"id":"360f7284-7bf5-4024-95eb-42607cee0046","type":"HelpTool"}]},"id":"626ca7d5-3799-4404-ab2e-dfb3a8560af0","type":"Toolbar"},{"attributes":{"data_source":{"id":"668c070f-f11d-4502-bac5-a32e59b23066","type":"ColumnDataSource"},"glyph":{"id":"3a0a13d9-640a-4ac9-8f2f-13aeeaf62f11","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"4c24cd3b-e4ca-4fca-b3ad-a6609f794ee8","type":"VBar"},"selection_glyph":null},"id":"9a85d620-e716-40c4-b7c7-459be1a344f5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"4c24cd3b-e4ca-4fca-b3ad-a6609f794ee8","type":"VBar"},{"attributes":{"overlay":{"id":"27290e50-2fd0-42a4-bc0e-fa2a70c64f46","type":"BoxAnnotation"},"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"}},"id":"8dd9a7b6-79a3-4860-8f5b-df4bc5ad4863","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"}},"id":"076cc961-2fcb-4590-b410-07f2a06ba948","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"3a0a13d9-640a-4ac9-8f2f-13aeeaf62f11","type":"VBar"},{"attributes":{"plot":null,"text":null},"id":"48d9cc3f-0a23-4178-a247-48c1b5f54ef0","type":"Title"},{"attributes":{},"id":"c4b1c687-f14e-49af-9496-9e067a3d1a8d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27290e50-2fd0-42a4-bc0e-fa2a70c64f46","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"72d41071-1969-4395-ab15-eef0cf555325","type":"BasicTickFormatter"},"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4b1c687-f14e-49af-9496-9e067a3d1a8d","type":"BasicTicker"}},"id":"42c2a847-7451-4b3f-aef3-c2d41fde8289","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"668c070f-f11d-4502-bac5-a32e59b23066","type":"ColumnDataSource"},{"attributes":{},"id":"27ece2fa-d085-4943-927c-f307763c7cce","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"}},"id":"360f7284-7bf5-4024-95eb-42607cee0046","type":"HelpTool"},{"attributes":{"callback":null},"id":"15418bdc-f50f-4cff-a936-490df934c58e","type":"DataRange1d"},{"attributes":{"plot":{"id":"aa7db7d2-31be-4604-96df-b4474f85ed6e","subtype":"Figure","type":"Plot"}},"id":"3ea0ee28-1ddd-468c-b544-19c994b44eb5","type":"SaveTool"},{"attributes":{},"id":"43620972-64ac-4d0b-b62a-4fd7d0a3d9d0","type":"ToolEvents"}],"root_ids":["aa7db7d2-31be-4604-96df-b4474f85ed6e"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"edd1a278-0e1f-4ef5-b79f-4cb9c2a1c36d","elementid":"91b5d145-9bed-4c38-91b7-fa2ba310358a","modelid":"aa7db7d2-31be-4604-96df-b4474f85ed6e"}];
              
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