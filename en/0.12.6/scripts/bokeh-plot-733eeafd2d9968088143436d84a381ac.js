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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("2fd7c171-7145-4684-b81b-cb547f50f602");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2fd7c171-7145-4684-b81b-cb547f50f602' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"88401d56-41b3-4ee8-bef2-c8df8283a208":{"roots":{"references":[{"attributes":{},"id":"604b9edd-0b07-4e6b-87b8-1825be06984a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"604b9edd-0b07-4e6b-87b8-1825be06984a","type":"BasicTickFormatter"},"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ad8ab2f-2fbb-41fc-9320-c5b01c52bb8c","type":"BasicTicker"}},"id":"a7ba110d-5f4f-4a40-94d7-23a7eb747cf2","type":"LinearAxis"},{"attributes":{"overlay":{"id":"e135158c-5cf4-45c5-b386-a43f4012176a","type":"BoxAnnotation"},"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"}},"id":"15ebe177-6293-4bc4-921e-9f0db1d487db","type":"BoxZoomTool"},{"attributes":{},"id":"7fcb8a6a-5d80-45fc-8bf8-bdff26d60c3f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d75892f1-d0c7-4119-ba1e-a1aa327320df","type":"DataRange1d"},{"attributes":{"callback":null},"id":"9cd6881d-f2ba-4bb5-9715-e1f261a38cbb","type":"DataRange1d"},{"attributes":{"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"}},"id":"4771ff46-962d-4eb2-ab66-b6233ad3ee4e","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"a7ba110d-5f4f-4a40-94d7-23a7eb747cf2","type":"LinearAxis"}],"left":[{"id":"523888e3-84be-439f-8f98-4b86fae50d49","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a7ba110d-5f4f-4a40-94d7-23a7eb747cf2","type":"LinearAxis"},{"id":"c01107de-312a-46b0-9be0-d62e86e11689","type":"Grid"},{"id":"523888e3-84be-439f-8f98-4b86fae50d49","type":"LinearAxis"},{"id":"c2a73b63-ac6d-4f4f-92c2-e947d6989929","type":"Grid"},{"id":"e135158c-5cf4-45c5-b386-a43f4012176a","type":"BoxAnnotation"},{"id":"ee8a92ba-3be4-4965-98bd-50db23669da1","type":"GlyphRenderer"}],"title":{"id":"8c8ea4d6-bc1a-44d2-b01a-d8260e70b8de","type":"Title"},"tool_events":{"id":"e25cf725-35c2-4627-ad24-c1722087152b","type":"ToolEvents"},"toolbar":{"id":"dfc63d0f-5f65-4ac3-ad9e-24386eaa7009","type":"Toolbar"},"x_range":{"id":"9cd6881d-f2ba-4bb5-9715-e1f261a38cbb","type":"DataRange1d"},"x_scale":{"id":"8064032f-fb16-487e-bff7-43e41e690475","type":"LinearScale"},"y_range":{"id":"d75892f1-d0c7-4119-ba1e-a1aa327320df","type":"DataRange1d"},"y_scale":{"id":"b261818f-d1d4-4b2f-8dd0-bcd121e08fc8","type":"LinearScale"}},"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"687bdece-1703-48c2-bcc6-d589a30aaff1","type":"Annulus"},{"attributes":{"dimension":1,"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7fcb8a6a-5d80-45fc-8bf8-bdff26d60c3f","type":"BasicTicker"}},"id":"c2a73b63-ac6d-4f4f-92c2-e947d6989929","type":"Grid"},{"attributes":{},"id":"e25cf725-35c2-4627-ad24-c1722087152b","type":"ToolEvents"},{"attributes":{"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"}},"id":"8950e7b5-0b68-4017-bec8-703ef8580682","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9b0f3b1b-0385-4775-b63f-60b63c51e69c","type":"PanTool"},{"id":"4771ff46-962d-4eb2-ab66-b6233ad3ee4e","type":"WheelZoomTool"},{"id":"15ebe177-6293-4bc4-921e-9f0db1d487db","type":"BoxZoomTool"},{"id":"6d604b6f-fc58-4533-aff6-f0f1229ef72e","type":"SaveTool"},{"id":"8950e7b5-0b68-4017-bec8-703ef8580682","type":"ResetTool"},{"id":"ee00cdd4-4ef6-4ef0-9b7e-5e8ea3d9bddb","type":"HelpTool"}]},"id":"dfc63d0f-5f65-4ac3-ad9e-24386eaa7009","type":"Toolbar"},{"attributes":{"data_source":{"id":"1d266b35-bce6-499f-b3cd-29d8f228755e","type":"ColumnDataSource"},"glyph":{"id":"9aea2d3e-a760-480f-9772-722dec6db4fd","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"687bdece-1703-48c2-bcc6-d589a30aaff1","type":"Annulus"},"selection_glyph":null},"id":"ee8a92ba-3be4-4965-98bd-50db23669da1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"}},"id":"9b0f3b1b-0385-4775-b63f-60b63c51e69c","type":"PanTool"},{"attributes":{"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"}},"id":"ee00cdd4-4ef6-4ef0-9b7e-5e8ea3d9bddb","type":"HelpTool"},{"attributes":{},"id":"3ad8ab2f-2fbb-41fc-9320-c5b01c52bb8c","type":"BasicTicker"},{"attributes":{},"id":"b261818f-d1d4-4b2f-8dd0-bcd121e08fc8","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e135158c-5cf4-45c5-b386-a43f4012176a","type":"BoxAnnotation"},{"attributes":{},"id":"f7a969cf-0e9a-4ab9-a63d-abf4a3bc17fb","type":"BasicTickFormatter"},{"attributes":{},"id":"8064032f-fb16-487e-bff7-43e41e690475","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"9aea2d3e-a760-480f-9772-722dec6db4fd","type":"Annulus"},{"attributes":{"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ad8ab2f-2fbb-41fc-9320-c5b01c52bb8c","type":"BasicTicker"}},"id":"c01107de-312a-46b0-9be0-d62e86e11689","type":"Grid"},{"attributes":{"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"}},"id":"6d604b6f-fc58-4533-aff6-f0f1229ef72e","type":"SaveTool"},{"attributes":{"formatter":{"id":"f7a969cf-0e9a-4ab9-a63d-abf4a3bc17fb","type":"BasicTickFormatter"},"plot":{"id":"57dc1969-19fe-4934-80bf-2614c5880ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7fcb8a6a-5d80-45fc-8bf8-bdff26d60c3f","type":"BasicTicker"}},"id":"523888e3-84be-439f-8f98-4b86fae50d49","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"1d266b35-bce6-499f-b3cd-29d8f228755e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"8c8ea4d6-bc1a-44d2-b01a-d8260e70b8de","type":"Title"}],"root_ids":["57dc1969-19fe-4934-80bf-2614c5880ecc"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"88401d56-41b3-4ee8-bef2-c8df8283a208","elementid":"2fd7c171-7145-4684-b81b-cb547f50f602","modelid":"57dc1969-19fe-4934-80bf-2614c5880ecc"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
