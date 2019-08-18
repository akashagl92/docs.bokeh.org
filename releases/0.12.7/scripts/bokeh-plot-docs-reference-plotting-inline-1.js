(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("57ead846-f772-4604-918b-63d02a8a42a9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57ead846-f772-4604-918b-63d02a8a42a9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"b9a478d8-1525-4084-9256-953e0e05d0fb":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a901a6d-de61-497f-bd86-43e6096a5798","type":"Asterisk"},{"attributes":{"callback":null},"id":"a6711296-3815-4e20-aee1-0746b4794106","type":"DataRange1d"},{"attributes":{},"id":"49462ab0-afeb-4e16-ad9b-1d45573d1919","type":"LinearScale"},{"attributes":{},"id":"6dc602d7-8566-4075-a05b-543d19be16d8","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"7c313c5f-1f14-46fb-9ce2-8b6519adb485","type":"ColumnDataSource"}},"id":"93841836-6a81-4e44-82c7-521b8155d005","type":"CDSView"},{"attributes":{},"id":"836f84ea-64dc-427d-8d1c-5bd7bd808ed8","type":"BasicTicker"},{"attributes":{"plot":{"id":"adf0ea5b-f3d1-4f64-a818-f01c6908a3a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"836f84ea-64dc-427d-8d1c-5bd7bd808ed8","type":"BasicTicker"}},"id":"06bbdb1c-391d-4f69-a47a-e76af99a95f8","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"7c313c5f-1f14-46fb-9ce2-8b6519adb485","type":"ColumnDataSource"},{"attributes":{},"id":"a9b4a05d-245a-429c-9112-ce1dc6886926","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d558d293-3a63-4283-b14d-6b4693fcc947","type":"Asterisk"},{"attributes":{},"id":"dca328ab-0175-478f-897f-31bd3cca750e","type":"ResetTool"},{"attributes":{"data_source":{"id":"7c313c5f-1f14-46fb-9ce2-8b6519adb485","type":"ColumnDataSource"},"glyph":{"id":"d558d293-3a63-4283-b14d-6b4693fcc947","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5a901a6d-de61-497f-bd86-43e6096a5798","type":"Asterisk"},"selection_glyph":null,"view":{"id":"93841836-6a81-4e44-82c7-521b8155d005","type":"CDSView"}},"id":"c89fb99e-dc00-4e89-ac66-3c9df1273fc2","type":"GlyphRenderer"},{"attributes":{},"id":"68941ca3-fdfd-49f2-8210-a8ca698d4aa3","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"adf0ea5b-f3d1-4f64-a818-f01c6908a3a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6899713-bca1-4def-ba86-d34e28f94979","type":"BasicTicker"}},"id":"18f1440a-b0d9-451f-82bf-b88c835ee4d5","type":"Grid"},{"attributes":{},"id":"b6899713-bca1-4def-ba86-d34e28f94979","type":"BasicTicker"},{"attributes":{},"id":"b6934270-e709-4119-a3bb-6d75c1ed5c94","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"257c22bd-9974-40c0-84de-e2a3cc7e1707","type":"LinearAxis"}],"left":[{"id":"270f9753-52a9-48e1-bd2e-129393cabd5f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"257c22bd-9974-40c0-84de-e2a3cc7e1707","type":"LinearAxis"},{"id":"06bbdb1c-391d-4f69-a47a-e76af99a95f8","type":"Grid"},{"id":"270f9753-52a9-48e1-bd2e-129393cabd5f","type":"LinearAxis"},{"id":"18f1440a-b0d9-451f-82bf-b88c835ee4d5","type":"Grid"},{"id":"5d532ab6-07b0-446f-b40d-26b7e709512d","type":"BoxAnnotation"},{"id":"c89fb99e-dc00-4e89-ac66-3c9df1273fc2","type":"GlyphRenderer"}],"title":{"id":"1c45dbe1-9166-4cbb-9c29-3df73be4eb55","type":"Title"},"toolbar":{"id":"36fa4a77-e58e-4d6c-a1a8-4542f5a10225","type":"Toolbar"},"x_range":{"id":"068ef284-0fa1-4f7c-92b2-36c4eac58d15","type":"DataRange1d"},"x_scale":{"id":"49462ab0-afeb-4e16-ad9b-1d45573d1919","type":"LinearScale"},"y_range":{"id":"a6711296-3815-4e20-aee1-0746b4794106","type":"DataRange1d"},"y_scale":{"id":"abef9158-113f-4058-9d1f-919405938ec6","type":"LinearScale"}},"id":"adf0ea5b-f3d1-4f64-a818-f01c6908a3a1","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6dc602d7-8566-4075-a05b-543d19be16d8","type":"BasicTickFormatter"},"plot":{"id":"adf0ea5b-f3d1-4f64-a818-f01c6908a3a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6899713-bca1-4def-ba86-d34e28f94979","type":"BasicTicker"}},"id":"270f9753-52a9-48e1-bd2e-129393cabd5f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"068ef284-0fa1-4f7c-92b2-36c4eac58d15","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03cf629a-0b54-46fc-9aac-a35270a7213c","type":"PanTool"},{"id":"aa48552f-70d4-4112-a431-d4bb3a9f1695","type":"WheelZoomTool"},{"id":"5665ba4a-f646-451b-bd96-6829c583418c","type":"BoxZoomTool"},{"id":"a9b4a05d-245a-429c-9112-ce1dc6886926","type":"SaveTool"},{"id":"dca328ab-0175-478f-897f-31bd3cca750e","type":"ResetTool"},{"id":"68941ca3-fdfd-49f2-8210-a8ca698d4aa3","type":"HelpTool"}]},"id":"36fa4a77-e58e-4d6c-a1a8-4542f5a10225","type":"Toolbar"},{"attributes":{"overlay":{"id":"5d532ab6-07b0-446f-b40d-26b7e709512d","type":"BoxAnnotation"}},"id":"5665ba4a-f646-451b-bd96-6829c583418c","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"1c45dbe1-9166-4cbb-9c29-3df73be4eb55","type":"Title"},{"attributes":{},"id":"abef9158-113f-4058-9d1f-919405938ec6","type":"LinearScale"},{"attributes":{},"id":"aa48552f-70d4-4112-a431-d4bb3a9f1695","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"b6934270-e709-4119-a3bb-6d75c1ed5c94","type":"BasicTickFormatter"},"plot":{"id":"adf0ea5b-f3d1-4f64-a818-f01c6908a3a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"836f84ea-64dc-427d-8d1c-5bd7bd808ed8","type":"BasicTicker"}},"id":"257c22bd-9974-40c0-84de-e2a3cc7e1707","type":"LinearAxis"},{"attributes":{},"id":"03cf629a-0b54-46fc-9aac-a35270a7213c","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5d532ab6-07b0-446f-b40d-26b7e709512d","type":"BoxAnnotation"}],"root_ids":["adf0ea5b-f3d1-4f64-a818-f01c6908a3a1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b9a478d8-1525-4084-9256-953e0e05d0fb","elementid":"57ead846-f772-4604-918b-63d02a8a42a9","modelid":"adf0ea5b-f3d1-4f64-a818-f01c6908a3a1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
