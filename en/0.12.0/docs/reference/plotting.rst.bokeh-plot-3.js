document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("e7d61e31-9cb3-427a-9d7d-c57d9068688c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e7d61e31-9cb3-427a-9d7d-c57d9068688c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"4d2c6364-29c0-415a-aef0-2da2b515918f":{"roots":{"references":[{"attributes":{"data_source":{"id":"3a75f8a0-ea81-4d6b-8f99-4167288ad515","type":"ColumnDataSource"},"glyph":{"id":"b176269d-e337-4570-8eef-d0a02ed93ed1","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"ff53bd7f-c9c4-4191-87f2-99484e652aa9","type":"CircleCross"},"selection_glyph":null},"id":"303fc816-f06a-428e-a790-c30a34e6ad06","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8f5f61e3-264f-4467-970e-6ec689fcad56","type":"DataRange1d"},{"attributes":{},"id":"8f5fb4a8-2cd6-4e96-94de-5a2146d7a522","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"3a75f8a0-ea81-4d6b-8f99-4167288ad515","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4bff49ce-fe34-4c68-afcc-ede124834e27","type":"BoxAnnotation"},"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"}},"id":"f0f5e64c-3e28-4c80-8ebb-93acaf59f132","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"d8c1b68c-cffc-4208-8454-62a0685115b5","type":"LinearAxis"}],"left":[{"id":"8ac2788c-8c85-46a0-9092-9e30fdd3d1f2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d8c1b68c-cffc-4208-8454-62a0685115b5","type":"LinearAxis"},{"id":"cbbc94d8-791a-4fe4-90b3-919b627270d9","type":"Grid"},{"id":"8ac2788c-8c85-46a0-9092-9e30fdd3d1f2","type":"LinearAxis"},{"id":"3ea53279-63eb-4425-9d98-439f208cc3a6","type":"Grid"},{"id":"4bff49ce-fe34-4c68-afcc-ede124834e27","type":"BoxAnnotation"},{"id":"303fc816-f06a-428e-a790-c30a34e6ad06","type":"GlyphRenderer"}],"title":{"id":"8501b487-9177-46d6-8df3-4a8425012743","type":"Title"},"tool_events":{"id":"0d278bb6-6cbb-4906-98a4-fce1c5760c1a","type":"ToolEvents"},"toolbar":{"id":"05ccbeb7-b089-4947-a704-e53ce4263dd1","type":"Toolbar"},"x_range":{"id":"8f5f61e3-264f-4467-970e-6ec689fcad56","type":"DataRange1d"},"y_range":{"id":"dd95b3cb-a65e-46fc-88c3-fcdb6e978a11","type":"DataRange1d"}},"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"a8638822-493a-4c4d-af72-f24b69ee00d4","type":"BasicTickFormatter"},"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"},"ticker":{"id":"363a6cf9-b4a8-4fb3-9663-d92eaea1e7d6","type":"BasicTicker"}},"id":"8ac2788c-8c85-46a0-9092-9e30fdd3d1f2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dd95b3cb-a65e-46fc-88c3-fcdb6e978a11","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"},"ticker":{"id":"363a6cf9-b4a8-4fb3-9663-d92eaea1e7d6","type":"BasicTicker"}},"id":"3ea53279-63eb-4425-9d98-439f208cc3a6","type":"Grid"},{"attributes":{"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"}},"id":"ff1d04fd-dd17-4521-a983-1bc0a0133a27","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"8501b487-9177-46d6-8df3-4a8425012743","type":"Title"},{"attributes":{"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"}},"id":"bb1720b6-142c-4f51-a6d4-3261b9641fb7","type":"SaveTool"},{"attributes":{"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f5fb4a8-2cd6-4e96-94de-5a2146d7a522","type":"BasicTicker"}},"id":"cbbc94d8-791a-4fe4-90b3-919b627270d9","type":"Grid"},{"attributes":{"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"}},"id":"c59826d0-0059-4406-8240-ff489b3fe0e7","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff53bd7f-c9c4-4191-87f2-99484e652aa9","type":"CircleCross"},{"attributes":{},"id":"0d278bb6-6cbb-4906-98a4-fce1c5760c1a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9873cdf3-529b-4f46-b467-f91c3d75f40c","type":"BasicTickFormatter"},"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f5fb4a8-2cd6-4e96-94de-5a2146d7a522","type":"BasicTicker"}},"id":"d8c1b68c-cffc-4208-8454-62a0685115b5","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ff1d04fd-dd17-4521-a983-1bc0a0133a27","type":"PanTool"},{"id":"3bd72e73-f9ab-400d-8041-578515d2eb9e","type":"WheelZoomTool"},{"id":"f0f5e64c-3e28-4c80-8ebb-93acaf59f132","type":"BoxZoomTool"},{"id":"bb1720b6-142c-4f51-a6d4-3261b9641fb7","type":"SaveTool"},{"id":"c59826d0-0059-4406-8240-ff489b3fe0e7","type":"ResetTool"},{"id":"e7e2a77e-0e07-4aeb-a461-e16feb9885a9","type":"HelpTool"}]},"id":"05ccbeb7-b089-4947-a704-e53ce4263dd1","type":"Toolbar"},{"attributes":{"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"}},"id":"3bd72e73-f9ab-400d-8041-578515d2eb9e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6d637c86-e6ba-48d0-8cb9-487323b2c79f","subtype":"Figure","type":"Plot"}},"id":"e7e2a77e-0e07-4aeb-a461-e16feb9885a9","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4bff49ce-fe34-4c68-afcc-ede124834e27","type":"BoxAnnotation"},{"attributes":{},"id":"a8638822-493a-4c4d-af72-f24b69ee00d4","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b176269d-e337-4570-8eef-d0a02ed93ed1","type":"CircleCross"},{"attributes":{},"id":"363a6cf9-b4a8-4fb3-9663-d92eaea1e7d6","type":"BasicTicker"},{"attributes":{},"id":"9873cdf3-529b-4f46-b467-f91c3d75f40c","type":"BasicTickFormatter"}],"root_ids":["6d637c86-e6ba-48d0-8cb9-487323b2c79f"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"4d2c6364-29c0-415a-aef0-2da2b515918f","elementid":"e7d61e31-9cb3-427a-9d7d-c57d9068688c","modelid":"6d637c86-e6ba-48d0-8cb9-487323b2c79f"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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