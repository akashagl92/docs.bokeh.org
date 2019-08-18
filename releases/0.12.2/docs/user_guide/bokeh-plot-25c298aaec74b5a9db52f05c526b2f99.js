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
      };var element = document.getElementById("0961d900-5cc9-4e58-b82b-14a55d87e794");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0961d900-5cc9-4e58-b82b-14a55d87e794' but no matching script tag was found. ")
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
                  var docs_json = {"3e29c489-ac9b-4e44-86d3-eca0bf665c0c":{"roots":{"references":[{"attributes":{"end":{"id":"3aaed171-8ba8-483a-af15-6175b430d404","type":"NormalHead"},"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"14a00bcf-a38a-434f-8ab8-0f626da3f1e5","type":"Arrow"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"3aaed171-8ba8-483a-af15-6175b430d404","type":"NormalHead"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"24e9a7f3-c3fc-4611-9831-52118209a475","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"866e3efb-65a5-4f02-9fdb-b033b28a4a5d","type":"Title"},{"attributes":{"overlay":{"id":"193a85f1-1763-441b-a2ca-3d64393aa6f8","type":"BoxAnnotation"},"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"}},"id":"c1e6516a-6a70-473d-9476-cf037560892b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"}},"id":"605cd74a-fa33-4669-a097-40df503e1939","type":"ResetTool"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"cc422090-ecd9-4318-8776-a6c036b1b996","type":"OpenHead"},{"attributes":{"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"}},"id":"f929e9bd-8931-4f32-b7d2-4a62f1d2c6e5","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a10654d-cac3-4cc9-a59e-6925da040a2d","type":"BasicTicker"}},"id":"9e932ba6-6f9f-48f1-acb8-4f238707243c","type":"Grid"},{"attributes":{"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab6bc65d-e8ef-455e-98a6-0584201b47b1","type":"BasicTicker"}},"id":"f7e44ad7-349a-4f08-8854-90833169fe3c","type":"Grid"},{"attributes":{"callback":null},"id":"c6c747a8-8c78-44a4-863a-116c33f0eec8","type":"DataRange1d"},{"attributes":{"plot":null,"size":35},"id":"ba1447b1-3a42-4764-8555-5354dc5870e3","type":"VeeHead"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0.0,1.0,0.5],"y":[0.0,0.0,0.7]}},"id":"451bbb6a-fe26-4ccd-8773-3ac696834121","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"40308880-d321-4e1b-935a-b4df4d7e653b","type":"LinearAxis"}],"left":[{"id":"46dcd8fd-8ce5-465a-9017-1b1f7408b82b","type":"LinearAxis"}],"renderers":[{"id":"40308880-d321-4e1b-935a-b4df4d7e653b","type":"LinearAxis"},{"id":"f7e44ad7-349a-4f08-8854-90833169fe3c","type":"Grid"},{"id":"46dcd8fd-8ce5-465a-9017-1b1f7408b82b","type":"LinearAxis"},{"id":"9e932ba6-6f9f-48f1-acb8-4f238707243c","type":"Grid"},{"id":"193a85f1-1763-441b-a2ca-3d64393aa6f8","type":"BoxAnnotation"},{"id":"cceebad0-6515-4309-919d-22aa5a6ec405","type":"GlyphRenderer"},{"id":"c662e64e-3fbf-4e66-9fc8-3fd7a158eea0","type":"Arrow"},{"id":"14a00bcf-a38a-434f-8ab8-0f626da3f1e5","type":"Arrow"},{"id":"70bcc1f9-acee-43a4-8d1e-d12c133ba1e7","type":"Arrow"}],"title":{"id":"866e3efb-65a5-4f02-9fdb-b033b28a4a5d","type":"Title"},"tool_events":{"id":"78902166-99b7-4e7a-848f-786d779f0689","type":"ToolEvents"},"toolbar":{"id":"dde56215-8484-406f-9fe0-706c2d214666","type":"Toolbar"},"x_range":{"id":"b67dda4f-b173-4950-bfbb-7100aabf7d9a","type":"DataRange1d"},"y_range":{"id":"c6c747a8-8c78-44a4-863a-116c33f0eec8","type":"DataRange1d"}},"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},{"attributes":{"end":{"id":"ba1447b1-3a42-4764-8555-5354dc5870e3","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"70bcc1f9-acee-43a4-8d1e-d12c133ba1e7","type":"Arrow"},{"attributes":{},"id":"e2e2367c-4898-4ca1-af7a-2cc4db53c274","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f0f49ad-9718-4307-b200-15bdc6137354","type":"PanTool"},{"id":"1be02386-1992-4679-ae5f-65957bf4e37d","type":"WheelZoomTool"},{"id":"c1e6516a-6a70-473d-9476-cf037560892b","type":"BoxZoomTool"},{"id":"f929e9bd-8931-4f32-b7d2-4a62f1d2c6e5","type":"SaveTool"},{"id":"605cd74a-fa33-4669-a097-40df503e1939","type":"ResetTool"},{"id":"b7955432-6fbe-4eda-b32c-7788178b0578","type":"HelpTool"}]},"id":"dde56215-8484-406f-9fe0-706c2d214666","type":"Toolbar"},{"attributes":{"data_source":{"id":"451bbb6a-fe26-4ccd-8773-3ac696834121","type":"ColumnDataSource"},"glyph":{"id":"869be89f-6622-48a1-bc4b-a394aaf7c1b1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"24e9a7f3-c3fc-4611-9831-52118209a475","type":"Circle"},"selection_glyph":null},"id":"cceebad0-6515-4309-919d-22aa5a6ec405","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"}},"id":"7f0f49ad-9718-4307-b200-15bdc6137354","type":"PanTool"},{"attributes":{},"id":"9a10654d-cac3-4cc9-a59e-6925da040a2d","type":"BasicTicker"},{"attributes":{},"id":"78902166-99b7-4e7a-848f-786d779f0689","type":"ToolEvents"},{"attributes":{},"id":"3ffe3441-d696-4fb2-b2d3-e36484d2cba7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3ffe3441-d696-4fb2-b2d3-e36484d2cba7","type":"BasicTickFormatter"},"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a10654d-cac3-4cc9-a59e-6925da040a2d","type":"BasicTicker"}},"id":"46dcd8fd-8ce5-465a-9017-1b1f7408b82b","type":"LinearAxis"},{"attributes":{"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"}},"id":"1be02386-1992-4679-ae5f-65957bf4e37d","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"e2e2367c-4898-4ca1-af7a-2cc4db53c274","type":"BasicTickFormatter"},"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab6bc65d-e8ef-455e-98a6-0584201b47b1","type":"BasicTicker"}},"id":"40308880-d321-4e1b-935a-b4df4d7e653b","type":"LinearAxis"},{"attributes":{"end":{"id":"cc422090-ecd9-4318-8776-a6c036b1b996","type":"OpenHead"},"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"c662e64e-3fbf-4e66-9fc8-3fd7a158eea0","type":"Arrow"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"869be89f-6622-48a1-bc4b-a394aaf7c1b1","type":"Circle"},{"attributes":{},"id":"ab6bc65d-e8ef-455e-98a6-0584201b47b1","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b67dda4f-b173-4950-bfbb-7100aabf7d9a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"193a85f1-1763-441b-a2ca-3d64393aa6f8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9da49c2d-ad0c-463b-9b73-b9ff27a32699","subtype":"Figure","type":"Plot"}},"id":"b7955432-6fbe-4eda-b32c-7788178b0578","type":"HelpTool"}],"root_ids":["9da49c2d-ad0c-463b-9b73-b9ff27a32699"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"3e29c489-ac9b-4e44-86d3-eca0bf665c0c","elementid":"0961d900-5cc9-4e58-b82b-14a55d87e794","modelid":"9da49c2d-ad0c-463b-9b73-b9ff27a32699"}];
                  
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