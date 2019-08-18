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
      };var element = document.getElementById("b100222c-5eab-4f2d-ab51-444e8e4f9d7b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b100222c-5eab-4f2d-ab51-444e8e4f9d7b' but no matching script tag was found. ")
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
                var docs_json = {"4dfeab6e-5926-464e-961a-5877584796c4":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"67c521b9-0ba2-4059-ad32-e275b854627e","type":"Circle"},{"attributes":{},"id":"b14bb777-e20b-4ccc-baed-4a6223fd56ba","type":"PanTool"},{"attributes":{},"id":"f5da3089-ebe4-449a-b8d4-b68ef538d511","type":"ResetTool"},{"attributes":{"source":{"id":"0109b6ae-25a1-4c37-95d7-7f07a04cddc8","type":"ColumnDataSource"}},"id":"0683dbf3-9aa0-4465-80f0-948548bec947","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"f736b612-3e18-4579-8093-fb04efc81457","type":"Circle"},{"attributes":{},"id":"51b696f1-f7fb-41c6-b53c-69f73591847f","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5b74aa8f-5667-4de2-aff3-2a43381c30dd","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"8488b70a-590a-4102-aaa4-9f7c48b4a9b2","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["height","weight","names"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"0109b6ae-25a1-4c37-95d7-7f07a04cddc8","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"548ba39d-d71c-4a2b-b4f4-b9abb1cf36e1","type":"LinearAxis"}],"left":[{"id":"5915e721-f4e3-43f3-a7de-16945d6019d2","type":"LinearAxis"}],"renderers":[{"id":"548ba39d-d71c-4a2b-b4f4-b9abb1cf36e1","type":"LinearAxis"},{"id":"20015d00-7766-4653-aad7-83d58af54915","type":"Grid"},{"id":"5915e721-f4e3-43f3-a7de-16945d6019d2","type":"LinearAxis"},{"id":"8ffb0535-0f11-49a4-a2e2-27156d1c2018","type":"Grid"},{"id":"5b74aa8f-5667-4de2-aff3-2a43381c30dd","type":"BoxAnnotation"},{"id":"371fb0b9-6334-492b-86dd-00f5430c011b","type":"GlyphRenderer"},{"id":"82fad36e-0a4f-4442-bc14-c5c51179eacf","type":"LabelSet"},{"id":"f159a9b3-10a9-4371-bfce-88147b0f5dbe","type":"Label"}],"title":{"id":"fc356849-9ef7-44c5-910e-5bc582adba29","type":"Title"},"toolbar":{"id":"6a2e498b-c731-4b56-9915-77f8582eaa7a","type":"Toolbar"},"x_range":{"id":"f470a465-7e9e-4bb2-a91f-38219c794d75","type":"Range1d"},"x_scale":{"id":"43b39235-49c5-431d-9263-34576fa5abda","type":"LinearScale"},"y_range":{"id":"8488b70a-590a-4102-aaa4-9f7c48b4a9b2","type":"DataRange1d"},"y_scale":{"id":"47695949-2a44-4e2e-8c69-16cd47dcb4c2","type":"LinearScale"}},"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"5b74aa8f-5667-4de2-aff3-2a43381c30dd","type":"BoxAnnotation"}},"id":"38f4e4f0-0a96-48f5-8906-3ab8de105535","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},"ticker":{"id":"0920c669-5462-4a69-bd39-97a92c0993a5","type":"BasicTicker"}},"id":"8ffb0535-0f11-49a4-a2e2-27156d1c2018","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b14bb777-e20b-4ccc-baed-4a6223fd56ba","type":"PanTool"},{"id":"51b696f1-f7fb-41c6-b53c-69f73591847f","type":"WheelZoomTool"},{"id":"38f4e4f0-0a96-48f5-8906-3ab8de105535","type":"BoxZoomTool"},{"id":"259e0da6-6413-49fa-90a0-a16617e93704","type":"SaveTool"},{"id":"f5da3089-ebe4-449a-b8d4-b68ef538d511","type":"ResetTool"},{"id":"b2ab2e41-a78a-4a1b-9407-dc04232d1751","type":"HelpTool"}]},"id":"6a2e498b-c731-4b56-9915-77f8582eaa7a","type":"Toolbar"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"2c00d8d3-96b6-449c-aeda-8e398eda7e11","type":"BasicTickFormatter"},"plot":{"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},"ticker":{"id":"0920c669-5462-4a69-bd39-97a92c0993a5","type":"BasicTicker"}},"id":"5915e721-f4e3-43f3-a7de-16945d6019d2","type":"LinearAxis"},{"attributes":{"level":"glyph","plot":{"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},"source":{"id":"0109b6ae-25a1-4c37-95d7-7f07a04cddc8","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"82fad36e-0a4f-4442-bc14-c5c51179eacf","type":"LabelSet"},{"attributes":{},"id":"0630c35c-af84-4c73-9d3c-228855d6dc98","type":"BasicTicker"},{"attributes":{},"id":"47695949-2a44-4e2e-8c69-16cd47dcb4c2","type":"LinearScale"},{"attributes":{},"id":"e5e7252c-c3ec-45a5-a75e-a4ac6f9c0b69","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0109b6ae-25a1-4c37-95d7-7f07a04cddc8","type":"ColumnDataSource"},"glyph":{"id":"67c521b9-0ba2-4059-ad32-e275b854627e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f736b612-3e18-4579-8093-fb04efc81457","type":"Circle"},"selection_glyph":null,"view":{"id":"0683dbf3-9aa0-4465-80f0-948548bec947","type":"CDSView"}},"id":"371fb0b9-6334-492b-86dd-00f5430c011b","type":"GlyphRenderer"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"e5e7252c-c3ec-45a5-a75e-a4ac6f9c0b69","type":"BasicTickFormatter"},"plot":{"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},"ticker":{"id":"0630c35c-af84-4c73-9d3c-228855d6dc98","type":"BasicTicker"}},"id":"548ba39d-d71c-4a2b-b4f4-b9abb1cf36e1","type":"LinearAxis"},{"attributes":{},"id":"259e0da6-6413-49fa-90a0-a16617e93704","type":"SaveTool"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"fc356849-9ef7-44c5-910e-5bc582adba29","type":"Title"},{"attributes":{"plot":{"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},"ticker":{"id":"0630c35c-af84-4c73-9d3c-228855d6dc98","type":"BasicTicker"}},"id":"20015d00-7766-4653-aad7-83d58af54915","type":"Grid"},{"attributes":{"callback":null,"end":275,"start":140},"id":"f470a465-7e9e-4bb2-a91f-38219c794d75","type":"Range1d"},{"attributes":{},"id":"0920c669-5462-4a69-bd39-97a92c0993a5","type":"BasicTicker"},{"attributes":{},"id":"2c00d8d3-96b6-449c-aeda-8e398eda7e11","type":"BasicTickFormatter"},{"attributes":{},"id":"43b39235-49c5-431d-9263-34576fa5abda","type":"LinearScale"},{"attributes":{},"id":"b2ab2e41-a78a-4a1b-9407-dc04232d1751","type":"HelpTool"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"7abc6780-b964-4053-98f9-2b892d8e47be","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"f159a9b3-10a9-4371-bfce-88147b0f5dbe","type":"Label"}],"root_ids":["7abc6780-b964-4053-98f9-2b892d8e47be"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4dfeab6e-5926-464e-961a-5877584796c4","elementid":"b100222c-5eab-4f2d-ab51-444e8e4f9d7b","modelid":"7abc6780-b964-4053-98f9-2b892d8e47be"}];
                
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
