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
      };var element = document.getElementById("aa78d1ab-99bf-4fee-89de-850be8404b31");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa78d1ab-99bf-4fee-89de-850be8404b31' but no matching script tag was found. ")
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
                var docs_json = {"10884aa8-c6f8-45c3-88ab-fd265bd98fc9":{"roots":{"references":[{"attributes":{"callback":null},"id":"cac8cea7-8469-426e-b5de-f0e12d41b6c0","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"ac3436d0-068b-42fd-b916-b32fdd81694c","type":"Title"},{"attributes":{"data_source":{"id":"b58189d5-5050-4fe7-9310-c4a7f5ccb850","type":"ColumnDataSource"},"glyph":{"id":"ee5ade98-750a-45b8-bfa1-1d993a8476fd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"431f0b09-14b3-41a7-9f30-298fa5292050","type":"Circle"},"selection_glyph":null},"id":"b7f73331-766d-4f01-9832-5f27a60b548f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f60cc64e-8283-42e8-84cf-b3c8976e6900","type":"BasicTickFormatter"},"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"},"ticker":{"id":"723a5c2e-0742-4f6a-9781-84eeb3d1a43e","type":"BasicTicker"}},"id":"bcd3e42e-b6d9-47d9-9fa7-9f712e95d582","type":"LinearAxis"},{"attributes":{},"id":"723a5c2e-0742-4f6a-9781-84eeb3d1a43e","type":"BasicTicker"},{"attributes":{"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"}},"id":"1943443a-b34b-4160-a5ff-7ae3a0a86567","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4225c95f-a9b8-4487-867f-56c57df96a8c","type":"PanTool"},{"id":"3f9b9c23-ea8f-4d1f-a5c8-9f0b7579f870","type":"WheelZoomTool"},{"id":"f01fc69e-f9fd-4ec6-9389-2195fdf8c2dd","type":"BoxZoomTool"},{"id":"1943443a-b34b-4160-a5ff-7ae3a0a86567","type":"SaveTool"},{"id":"59a2fd32-34b3-4292-9f5c-00537b1b8b34","type":"ResetTool"},{"id":"bf34d3a8-4568-4480-9e1b-eff443382865","type":"HelpTool"}]},"id":"5d7768b6-7974-4d39-a9ab-33f1b409c9aa","type":"Toolbar"},{"attributes":{"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"}},"id":"4225c95f-a9b8-4487-867f-56c57df96a8c","type":"PanTool"},{"attributes":{},"id":"b2f7f5fb-f295-40be-8d42-96af8c7ab992","type":"ToolEvents"},{"attributes":{},"id":"43a2b9f8-f526-4892-a98b-a3747b7bb857","type":"BasicTicker"},{"attributes":{},"id":"04bc9f51-bbff-4e29-bbb2-28b1d10f2ce8","type":"BasicTickFormatter"},{"attributes":{},"id":"f60cc64e-8283-42e8-84cf-b3c8976e6900","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"},"ticker":{"id":"723a5c2e-0742-4f6a-9781-84eeb3d1a43e","type":"BasicTicker"}},"id":"10ca09d9-a8e0-472d-a69b-77ba78c62cfc","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b58189d5-5050-4fe7-9310-c4a7f5ccb850","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"}},"id":"3f9b9c23-ea8f-4d1f-a5c8-9f0b7579f870","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"f6769bb6-6303-4925-8445-0c7539de0a9b","type":"BoxAnnotation"},"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"}},"id":"f01fc69e-f9fd-4ec6-9389-2195fdf8c2dd","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"bcd3e42e-b6d9-47d9-9fa7-9f712e95d582","type":"LinearAxis"}],"left":[{"id":"2a9c09d2-b0c9-4fab-84cc-ea71d373aa2f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bcd3e42e-b6d9-47d9-9fa7-9f712e95d582","type":"LinearAxis"},{"id":"10ca09d9-a8e0-472d-a69b-77ba78c62cfc","type":"Grid"},{"id":"2a9c09d2-b0c9-4fab-84cc-ea71d373aa2f","type":"LinearAxis"},{"id":"d2088799-c70f-4a9d-9ddb-694d09a20aac","type":"Grid"},{"id":"f6769bb6-6303-4925-8445-0c7539de0a9b","type":"BoxAnnotation"},{"id":"b7f73331-766d-4f01-9832-5f27a60b548f","type":"GlyphRenderer"}],"title":{"id":"ac3436d0-068b-42fd-b916-b32fdd81694c","type":"Title"},"tool_events":{"id":"b2f7f5fb-f295-40be-8d42-96af8c7ab992","type":"ToolEvents"},"toolbar":{"id":"5d7768b6-7974-4d39-a9ab-33f1b409c9aa","type":"Toolbar"},"x_range":{"id":"8532be87-7f11-47c3-b141-b2bb0b8f0083","type":"DataRange1d"},"y_range":{"id":"cac8cea7-8469-426e-b5de-f0e12d41b6c0","type":"DataRange1d"}},"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"},"ticker":{"id":"43a2b9f8-f526-4892-a98b-a3747b7bb857","type":"BasicTicker"}},"id":"d2088799-c70f-4a9d-9ddb-694d09a20aac","type":"Grid"},{"attributes":{"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"}},"id":"59a2fd32-34b3-4292-9f5c-00537b1b8b34","type":"ResetTool"},{"attributes":{"callback":null},"id":"8532be87-7f11-47c3-b141-b2bb0b8f0083","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f6769bb6-6303-4925-8445-0c7539de0a9b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"04bc9f51-bbff-4e29-bbb2-28b1d10f2ce8","type":"BasicTickFormatter"},"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"},"ticker":{"id":"43a2b9f8-f526-4892-a98b-a3747b7bb857","type":"BasicTicker"}},"id":"2a9c09d2-b0c9-4fab-84cc-ea71d373aa2f","type":"LinearAxis"},{"attributes":{"plot":{"id":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac","subtype":"Figure","type":"Plot"}},"id":"bf34d3a8-4568-4480-9e1b-eff443382865","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"431f0b09-14b3-41a7-9f30-298fa5292050","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee5ade98-750a-45b8-bfa1-1d993a8476fd","type":"Circle"}],"root_ids":["e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"10884aa8-c6f8-45c3-88ab-fd265bd98fc9","elementid":"aa78d1ab-99bf-4fee-89de-850be8404b31","modelid":"e5d5a0a5-aebe-4f63-9d5b-116f2eddeeac"}];
                
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
