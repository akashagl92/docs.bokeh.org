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
      };var element = document.getElementById("3bdcd361-440b-4229-ad7e-428d687303ab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3bdcd361-440b-4229-ad7e-428d687303ab' but no matching script tag was found. ")
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
                var docs_json = {"d8dd5810-5138-4879-9aea-274e3895e543":{"roots":{"references":[{"attributes":{"callback":null},"id":"46d029cd-95ed-4230-804b-26756fad534d","type":"DataRange1d"},{"attributes":{"callback":null},"id":"dc8cd766-1c60-4acd-a41b-f8b1862141c9","type":"DataRange1d"},{"attributes":{"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"}},"id":"555d54d4-5c20-4dbe-a64d-833a0d2684d5","type":"PanTool"},{"attributes":{"formatter":{"id":"b7043bb8-f96c-421f-8ce5-ca1880e41ced","type":"FuncTickFormatter"},"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd11dcba-2894-4ecf-b458-fe7dfd4e549d","type":"BasicTicker"}},"id":"7b344166-3541-42c9-938c-f333fa99421f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f7d7cb67-37fe-4fb7-b136-02c248dc1b87","type":"ColumnDataSource"},"glyph":{"id":"0478a830-ab62-48b5-9970-186cb4768fe6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6b7356df-b933-4030-a16d-de742f717bbc","type":"Circle"},"selection_glyph":null},"id":"ac23cd4f-96b3-484e-bd49-d53f0712eb3e","type":"GlyphRenderer"},{"attributes":{},"id":"da636238-06f9-49be-9810-c95f28226402","type":"ToolEvents"},{"attributes":{},"id":"08d91fdc-2801-481e-b588-13e80f3d1577","type":"BasicTicker"},{"attributes":{"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"}},"id":"5adcacc3-1c65-4705-876e-67490345bffe","type":"WheelZoomTool"},{"attributes":{"code":"\n    return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n"},"id":"b7043bb8-f96c-421f-8ce5-ca1880e41ced","type":"FuncTickFormatter"},{"attributes":{},"id":"bd3d4869-c9fb-4b80-ad49-37707e53277c","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"42dbbecc-7677-48e0-9d94-f11361dcb4e8","type":"Title"},{"attributes":{"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"}},"id":"4573b5d4-0fa7-427c-901e-21cc8f607200","type":"HelpTool"},{"attributes":{"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"}},"id":"71f650da-2568-4053-92a7-0d6da50b501c","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd11dcba-2894-4ecf-b458-fe7dfd4e549d","type":"BasicTicker"}},"id":"ed338bb0-965d-4c0d-b2ae-0eee1ba839bb","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"0478a830-ab62-48b5-9970-186cb4768fe6","type":"Circle"},{"attributes":{"formatter":{"id":"bd3d4869-c9fb-4b80-ad49-37707e53277c","type":"BasicTickFormatter"},"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"},"ticker":{"id":"08d91fdc-2801-481e-b588-13e80f3d1577","type":"BasicTicker"}},"id":"ce3bebe5-ba3d-470a-99db-c4c9c20ddc31","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b7356df-b933-4030-a16d-de742f717bbc","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b2b1d619-3a44-4049-9819-45954f06ac30","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"},"ticker":{"id":"08d91fdc-2801-481e-b588-13e80f3d1577","type":"BasicTicker"}},"id":"d5efa16d-d60e-496b-ac14-498b6dc962fe","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"555d54d4-5c20-4dbe-a64d-833a0d2684d5","type":"PanTool"},{"id":"5adcacc3-1c65-4705-876e-67490345bffe","type":"WheelZoomTool"},{"id":"f9533fa0-4a0a-41a1-baa9-88157c6d8b09","type":"BoxZoomTool"},{"id":"71f650da-2568-4053-92a7-0d6da50b501c","type":"SaveTool"},{"id":"f76ff840-fbaf-487b-ba6e-1d7a118ea5fc","type":"ResetTool"},{"id":"4573b5d4-0fa7-427c-901e-21cc8f607200","type":"HelpTool"}]},"id":"6fc76bbe-bb4d-46e8-9815-fd3647c2e130","type":"Toolbar"},{"attributes":{"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"}},"id":"f76ff840-fbaf-487b-ba6e-1d7a118ea5fc","type":"ResetTool"},{"attributes":{"overlay":{"id":"b2b1d619-3a44-4049-9819-45954f06ac30","type":"BoxAnnotation"},"plot":{"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"}},"id":"f9533fa0-4a0a-41a1-baa9-88157c6d8b09","type":"BoxZoomTool"},{"attributes":{},"id":"fd11dcba-2894-4ecf-b458-fe7dfd4e549d","type":"BasicTicker"},{"attributes":{"below":[{"id":"ce3bebe5-ba3d-470a-99db-c4c9c20ddc31","type":"LinearAxis"}],"left":[{"id":"7b344166-3541-42c9-938c-f333fa99421f","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"ce3bebe5-ba3d-470a-99db-c4c9c20ddc31","type":"LinearAxis"},{"id":"d5efa16d-d60e-496b-ac14-498b6dc962fe","type":"Grid"},{"id":"7b344166-3541-42c9-938c-f333fa99421f","type":"LinearAxis"},{"id":"ed338bb0-965d-4c0d-b2ae-0eee1ba839bb","type":"Grid"},{"id":"b2b1d619-3a44-4049-9819-45954f06ac30","type":"BoxAnnotation"},{"id":"ac23cd4f-96b3-484e-bd49-d53f0712eb3e","type":"GlyphRenderer"}],"title":{"id":"42dbbecc-7677-48e0-9d94-f11361dcb4e8","type":"Title"},"tool_events":{"id":"da636238-06f9-49be-9810-c95f28226402","type":"ToolEvents"},"toolbar":{"id":"6fc76bbe-bb4d-46e8-9815-fd3647c2e130","type":"Toolbar"},"x_range":{"id":"46d029cd-95ed-4230-804b-26756fad534d","type":"DataRange1d"},"y_range":{"id":"dc8cd766-1c60-4acd-a41b-f8b1862141c9","type":"DataRange1d"}},"id":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"f7d7cb67-37fe-4fb7-b136-02c248dc1b87","type":"ColumnDataSource"}],"root_ids":["f942f5ba-78ae-4b3c-bc27-40f7884d1c56"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d8dd5810-5138-4879-9aea-274e3895e543","elementid":"3bdcd361-440b-4229-ad7e-428d687303ab","modelid":"f942f5ba-78ae-4b3c-bc27-40f7884d1c56"}];
                
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
