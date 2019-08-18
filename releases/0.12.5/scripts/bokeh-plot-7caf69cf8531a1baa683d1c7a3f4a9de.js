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
      };var element = document.getElementById("0d5b0d4f-ec02-44c0-bb7c-ccd4b19dec11");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d5b0d4f-ec02-44c0-bb7c-ccd4b19dec11' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"52d874b2-1078-4b3a-8fcd-097e48839c6d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eb0af28c-a54c-4b69-9bdc-eda6863384c0","type":"PanTool"},{"id":"ad651fc8-b595-4368-91ed-ea7600341fb7","type":"WheelZoomTool"},{"id":"88492473-4f9b-48dc-b0b5-9ca40f6c936a","type":"BoxZoomTool"},{"id":"366435aa-01dd-41a0-98ca-184e5b7d9127","type":"SaveTool"},{"id":"bc4de323-ec95-4b92-b219-3204bb4d2f14","type":"ResetTool"},{"id":"0f11a22b-714e-4731-8fbe-7c2910ee873f","type":"HelpTool"}]},"id":"9e1dbd78-6940-4599-8fcb-5f5081bb14d6","type":"Toolbar"},{"attributes":{"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"}},"id":"366435aa-01dd-41a0-98ca-184e5b7d9127","type":"SaveTool"},{"attributes":{},"id":"fb819cc5-7460-410f-be06-a368c47cf6c8","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf58a53c-5993-4fb6-a6c7-c18752f5bc09","type":"BasicTicker"}},"id":"e66be612-80d8-454e-bcde-9781c8261cea","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e49c918a-e4ac-4f5b-af3a-3a3b54a4e71f","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6df8f437-c357-444b-8563-101bddb49a6c","type":"LinearAxis"}],"left":[{"id":"c14fa690-870a-495f-94e7-2d5cfcfa1f30","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6df8f437-c357-444b-8563-101bddb49a6c","type":"LinearAxis"},{"id":"6e127cc8-c6b6-4b35-97fa-58a5bfc146fc","type":"Grid"},{"id":"c14fa690-870a-495f-94e7-2d5cfcfa1f30","type":"LinearAxis"},{"id":"e66be612-80d8-454e-bcde-9781c8261cea","type":"Grid"},{"id":"e49c918a-e4ac-4f5b-af3a-3a3b54a4e71f","type":"BoxAnnotation"},{"id":"fb49e702-d3b4-40fc-8de1-95b06245c087","type":"GlyphRenderer"}],"title":{"id":"7485835b-8dae-4b6f-8f4b-dca85301d6ec","type":"Title"},"tool_events":{"id":"ba024932-9e1c-4b19-9c0a-853494717895","type":"ToolEvents"},"toolbar":{"id":"9e1dbd78-6940-4599-8fcb-5f5081bb14d6","type":"Toolbar"},"x_range":{"id":"ace8af13-bd63-4619-800b-2a779addd9d6","type":"DataRange1d"},"y_range":{"id":"f9ea7419-85c8-4589-84ca-d4430c9267c9","type":"DataRange1d"}},"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"f9ea7419-85c8-4589-84ca-d4430c9267c9","type":"DataRange1d"},{"attributes":{"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"}},"id":"bc4de323-ec95-4b92-b219-3204bb4d2f14","type":"ResetTool"},{"attributes":{"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"}},"id":"0f11a22b-714e-4731-8fbe-7c2910ee873f","type":"HelpTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2f13e81-0f53-4dc2-899e-50da06d16abc","type":"Oval"},{"attributes":{},"id":"be4ce853-60cc-42c9-b342-99d7bb784ce2","type":"BasicTickFormatter"},{"attributes":{},"id":"cf58a53c-5993-4fb6-a6c7-c18752f5bc09","type":"BasicTicker"},{"attributes":{},"id":"e937f003-e58d-48b2-9673-0fd8a2297ea9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ace8af13-bd63-4619-800b-2a779addd9d6","type":"DataRange1d"},{"attributes":{},"id":"ba024932-9e1c-4b19-9c0a-853494717895","type":"ToolEvents"},{"attributes":{"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"}},"id":"eb0af28c-a54c-4b69-9bdc-eda6863384c0","type":"PanTool"},{"attributes":{"formatter":{"id":"be4ce853-60cc-42c9-b342-99d7bb784ce2","type":"BasicTickFormatter"},"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf58a53c-5993-4fb6-a6c7-c18752f5bc09","type":"BasicTicker"}},"id":"c14fa690-870a-495f-94e7-2d5cfcfa1f30","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4211e546-7627-4309-b7a3-2190c16d0014","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6484d338-cc01-43dd-a22f-651901245562","type":"Oval"},{"attributes":{"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"}},"id":"ad651fc8-b595-4368-91ed-ea7600341fb7","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"fb819cc5-7460-410f-be06-a368c47cf6c8","type":"BasicTickFormatter"},"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e937f003-e58d-48b2-9673-0fd8a2297ea9","type":"BasicTicker"}},"id":"6df8f437-c357-444b-8563-101bddb49a6c","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"7485835b-8dae-4b6f-8f4b-dca85301d6ec","type":"Title"},{"attributes":{"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e937f003-e58d-48b2-9673-0fd8a2297ea9","type":"BasicTicker"}},"id":"6e127cc8-c6b6-4b35-97fa-58a5bfc146fc","type":"Grid"},{"attributes":{"data_source":{"id":"4211e546-7627-4309-b7a3-2190c16d0014","type":"ColumnDataSource"},"glyph":{"id":"6484d338-cc01-43dd-a22f-651901245562","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2f13e81-0f53-4dc2-899e-50da06d16abc","type":"Oval"},"selection_glyph":null},"id":"fb49e702-d3b4-40fc-8de1-95b06245c087","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"e49c918a-e4ac-4f5b-af3a-3a3b54a4e71f","type":"BoxAnnotation"},"plot":{"id":"84a041ea-d1d8-4edb-95ab-d628a174c3c1","subtype":"Figure","type":"Plot"}},"id":"88492473-4f9b-48dc-b0b5-9ca40f6c936a","type":"BoxZoomTool"}],"root_ids":["84a041ea-d1d8-4edb-95ab-d628a174c3c1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"52d874b2-1078-4b3a-8fcd-097e48839c6d","elementid":"0d5b0d4f-ec02-44c0-bb7c-ccd4b19dec11","modelid":"84a041ea-d1d8-4edb-95ab-d628a174c3c1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
