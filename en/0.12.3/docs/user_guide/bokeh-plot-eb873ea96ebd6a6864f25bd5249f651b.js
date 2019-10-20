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
      };var element = document.getElementById("09642b29-075c-4357-b0d7-7c6082b33673");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09642b29-075c-4357-b0d7-7c6082b33673' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"bf614bdb-728e-4a38-ab52-71cd27ab50f2":{"roots":{"references":[{"attributes":{},"id":"2e3499f8-306b-4583-8ea9-6452be95123e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"}},"id":"e406a14f-0aea-48dc-8610-5bbff27f7497","type":"PanTool"},{"attributes":{"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"}},"id":"1462dba2-6deb-40da-b971-e538f87ae267","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.5,3.0,2.0],"y":[2.0,3.0,1.0,1.5]}},"id":"a85eb4c3-a399-4d75-a154-1152e01e952c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a56c4a02-be6a-4462-a082-d981a00a158b","type":"BasicTicker"}},"id":"4cffcb15-2f52-4863-8014-8a3fe89d8be0","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"86caec8d-8015-46e4-9add-95b8597fe5ef","type":"Circle"},{"attributes":{},"id":"929b25e1-f225-4729-88c8-653c479f366f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2e3499f8-306b-4583-8ea9-6452be95123e","type":"BasicTickFormatter"},"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5a1d67e-edcb-421f-a812-7023b56236af","type":"BasicTicker"}},"id":"97a55000-e776-41b2-911c-f4a43769a69b","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e406a14f-0aea-48dc-8610-5bbff27f7497","type":"PanTool"},{"id":"a74cea8e-c18e-4c1d-87c5-e48faa2d817f","type":"ResetTool"},{"id":"1462dba2-6deb-40da-b971-e538f87ae267","type":"SaveTool"}]},"id":"a6c00f3a-0f0a-4d7a-b964-00c97f3057a0","type":"Toolbar"},{"attributes":{"callback":null},"id":"57113b3a-d13e-444d-a9ad-b85bfb36c257","type":"DataRange1d"},{"attributes":{},"id":"53e5b4ea-d4ce-4f7a-9866-d4e232f306bc","type":"ToolEvents"},{"attributes":{"below":[{"id":"97a55000-e776-41b2-911c-f4a43769a69b","type":"LinearAxis"}],"left":[{"id":"2d15bb59-74fb-4cc4-b74d-4f11a7290aca","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"97a55000-e776-41b2-911c-f4a43769a69b","type":"LinearAxis"},{"id":"9a6ebe5a-a816-4e16-9a48-5c20a95d73ee","type":"Grid"},{"id":"2d15bb59-74fb-4cc4-b74d-4f11a7290aca","type":"LinearAxis"},{"id":"4cffcb15-2f52-4863-8014-8a3fe89d8be0","type":"Grid"},{"id":"973d2b9c-951e-4ff9-a629-f6ebd9eef230","type":"GlyphRenderer"}],"title":{"id":"58c9cf90-90f6-42f6-87e5-75bbe0fef345","type":"Title"},"tool_events":{"id":"53e5b4ea-d4ce-4f7a-9866-d4e232f306bc","type":"ToolEvents"},"toolbar":{"id":"a6c00f3a-0f0a-4d7a-b964-00c97f3057a0","type":"Toolbar"},"x_range":{"id":"0b3d9e00-fcca-41b8-862b-1e6f8aa0cd41","type":"DataRange1d"},"y_range":{"id":"57113b3a-d13e-444d-a9ad-b85bfb36c257","type":"DataRange1d"}},"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"}},"id":"a74cea8e-c18e-4c1d-87c5-e48faa2d817f","type":"ResetTool"},{"attributes":{"formatter":{"id":"929b25e1-f225-4729-88c8-653c479f366f","type":"BasicTickFormatter"},"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a56c4a02-be6a-4462-a082-d981a00a158b","type":"BasicTicker"}},"id":"2d15bb59-74fb-4cc4-b74d-4f11a7290aca","type":"LinearAxis"},{"attributes":{"plot":{"id":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5a1d67e-edcb-421f-a812-7023b56236af","type":"BasicTicker"}},"id":"9a6ebe5a-a816-4e16-9a48-5c20a95d73ee","type":"Grid"},{"attributes":{},"id":"a56c4a02-be6a-4462-a082-d981a00a158b","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"58c9cf90-90f6-42f6-87e5-75bbe0fef345","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c8db838-d862-4414-b9bc-361e19b6d09b","type":"Circle"},{"attributes":{"data_source":{"id":"a85eb4c3-a399-4d75-a154-1152e01e952c","type":"ColumnDataSource"},"glyph":{"id":"86caec8d-8015-46e4-9add-95b8597fe5ef","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5c8db838-d862-4414-b9bc-361e19b6d09b","type":"Circle"},"selection_glyph":null},"id":"973d2b9c-951e-4ff9-a629-f6ebd9eef230","type":"GlyphRenderer"},{"attributes":{},"id":"a5a1d67e-edcb-421f-a812-7023b56236af","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0b3d9e00-fcca-41b8-862b-1e6f8aa0cd41","type":"DataRange1d"}],"root_ids":["49d9a2fa-1f94-422f-af9b-94f0ce7d78f9"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"bf614bdb-728e-4a38-ab52-71cd27ab50f2","elementid":"09642b29-075c-4357-b0d7-7c6082b33673","modelid":"49d9a2fa-1f94-422f-af9b-94f0ce7d78f9"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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