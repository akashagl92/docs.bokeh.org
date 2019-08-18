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
      };var element = document.getElementById("d8de5a11-0e58-49b0-8796-f92b65ce3fdd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8de5a11-0e58-49b0-8796-f92b65ce3fdd' but no matching script tag was found. ")
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
                var docs_json = {"ceb38e72-b038-4829-a466-f7bebb3bb930":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"2a6fa681-c5e3-4dd7-a70a-af7f6fa646f6","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"06e144da-c0b4-46d7-8ac7-2bb0b9e9ed74","type":"Line"},{"attributes":{"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"49ebd73d-6cc4-4f9f-b85e-a2e6e0f1a0d6","type":"PanTool"},{"attributes":{"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"b326a0c5-3409-47a1-a90b-b7941012a7e2","type":"WheelZoomTool"},{"attributes":{},"id":"9dd423b8-d734-49cf-a1d8-6ae64a7e6194","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"b"},"renderers":[{"id":"e9559444-f72f-48b5-97ae-5d399eb69df8","type":"GlyphRenderer"}]},"id":"e34ae7f9-3e91-4241-a01e-95c53ee6e4f4","type":"LegendItem"},{"attributes":{"axis_label":"Languages","formatter":{"id":"9dd423b8-d734-49cf-a1d8-6ae64a7e6194","type":"BasicTickFormatter"},"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"},"ticker":{"id":"0e562f65-1667-4165-a6c3-842315294067","type":"BasicTicker"}},"id":"a0f0af9f-d796-40ae-9933-a00f769286f0","type":"LinearAxis"},{"attributes":{"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"0148c33f-13d1-4a55-94a8-d7379f35e618","type":"HelpTool"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"fd56956d-f99e-4f28-b8bf-d68214bea0a6","type":"Line"},{"attributes":{"data_source":{"id":"02b57f54-3038-44d2-827c-25fa80cdc9e4","type":"ColumnDataSource"},"glyph":{"id":"125cff87-f756-47b6-9ced-0a9a23a1a7b2","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"bee29b50-e62d-42f8-86bc-8561a5464edb","type":"GlyphRenderer"},{"attributes":{"label":{"value":"a"},"renderers":[{"id":"bee29b50-e62d-42f8-86bc-8561a5464edb","type":"GlyphRenderer"}]},"id":"c26905ce-b3ce-4495-bdf1-c1601518708f","type":"LegendItem"},{"attributes":{"axis_label":"index","formatter":{"id":"84a3335b-a18b-41af-ad8a-55fcb2422e96","type":"BasicTickFormatter"},"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"},"ticker":{"id":"69c8f426-9733-48cf-a0dc-e954d429a32d","type":"BasicTicker"}},"id":"811d74d1-34c1-41d2-8de5-274cc7161abf","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"},"ticker":{"id":"0e562f65-1667-4165-a6c3-842315294067","type":"BasicTicker"}},"id":"67296ce7-ec67-4d90-b28e-9bb05dd280b0","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e3557df3-f760-496d-abd8-c941e42778a1","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"021d083d-1d53-423e-9e23-d0d32b52416b","type":"Range1d"},{"attributes":{"below":[{"id":"811d74d1-34c1-41d2-8de5-274cc7161abf","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"a0f0af9f-d796-40ae-9933-a00f769286f0","type":"LinearAxis"}],"renderers":[{"id":"e3557df3-f760-496d-abd8-c941e42778a1","type":"BoxAnnotation"},{"id":"bee29b50-e62d-42f8-86bc-8561a5464edb","type":"GlyphRenderer"},{"id":"e9559444-f72f-48b5-97ae-5d399eb69df8","type":"GlyphRenderer"},{"id":"2711e25f-78c1-4eb1-ad42-d93cf34b15ea","type":"GlyphRenderer"},{"id":"20876be6-e583-41c7-9f09-8c711b3959bc","type":"Legend"},{"id":"811d74d1-34c1-41d2-8de5-274cc7161abf","type":"LinearAxis"},{"id":"a0f0af9f-d796-40ae-9933-a00f769286f0","type":"LinearAxis"},{"id":"c09b415b-8676-4537-b956-f5150337c23a","type":"Grid"},{"id":"67296ce7-ec67-4d90-b28e-9bb05dd280b0","type":"Grid"}],"title":{"id":"d0edcbcc-a8f8-402a-94da-c6ca3636f349","type":"Title"},"tool_events":{"id":"7399b5b4-3e2b-4099-9149-50e74db8e5e3","type":"ToolEvents"},"toolbar":{"id":"ab4e92af-042f-4641-9315-733a53858f66","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"414cf06e-33d1-4ff9-961f-2bd92865bc86","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"021d083d-1d53-423e-9e23-d0d32b52416b","type":"Range1d"}},"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"},{"attributes":{"label":{"value":"c"},"renderers":[{"id":"2711e25f-78c1-4eb1-ad42-d93cf34b15ea","type":"GlyphRenderer"}]},"id":"9ca9ee24-5478-4310-b01c-fbb4adfab5d0","type":"LegendItem"},{"attributes":{},"id":"84a3335b-a18b-41af-ad8a-55fcb2422e96","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"455bc090-8217-4b35-a8d7-9ebb35fd39b7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"6d0037c9-d264-4d1e-b2c8-fc54a080666f","type":"ResetTool"},{"attributes":{"items":[{"id":"c26905ce-b3ce-4495-bdf1-c1601518708f","type":"LegendItem"},{"id":"e34ae7f9-3e91-4241-a01e-95c53ee6e4f4","type":"LegendItem"},{"id":"9ca9ee24-5478-4310-b01c-fbb4adfab5d0","type":"LegendItem"}],"location":"top_left","plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"20876be6-e583-41c7-9f09-8c711b3959bc","type":"Legend"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"414cf06e-33d1-4ff9-961f-2bd92865bc86","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"02b57f54-3038-44d2-827c-25fa80cdc9e4","type":"ColumnDataSource"},{"attributes":{},"id":"69c8f426-9733-48cf-a0dc-e954d429a32d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2a6fa681-c5e3-4dd7-a70a-af7f6fa646f6","type":"ColumnDataSource"},"glyph":{"id":"fd56956d-f99e-4f28-b8bf-d68214bea0a6","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"e9559444-f72f-48b5-97ae-5d399eb69df8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"},"ticker":{"id":"69c8f426-9733-48cf-a0dc-e954d429a32d","type":"BasicTicker"}},"id":"c09b415b-8676-4537-b956-f5150337c23a","type":"Grid"},{"attributes":{},"id":"7399b5b4-3e2b-4099-9149-50e74db8e5e3","type":"ToolEvents"},{"attributes":{"overlay":{"id":"e3557df3-f760-496d-abd8-c941e42778a1","type":"BoxAnnotation"},"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"9232051c-ba14-4583-a88d-cd59163429b0","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"49ebd73d-6cc4-4f9f-b85e-a2e6e0f1a0d6","type":"PanTool"},{"id":"b326a0c5-3409-47a1-a90b-b7941012a7e2","type":"WheelZoomTool"},{"id":"9232051c-ba14-4583-a88d-cd59163429b0","type":"BoxZoomTool"},{"id":"b2bba41f-61e7-4016-ba88-4dac33c1b702","type":"SaveTool"},{"id":"6d0037c9-d264-4d1e-b2c8-fc54a080666f","type":"ResetTool"},{"id":"0148c33f-13d1-4a55-94a8-d7379f35e618","type":"HelpTool"}]},"id":"ab4e92af-042f-4641-9315-733a53858f66","type":"Toolbar"},{"attributes":{"plot":{"id":"b39df9ba-263c-4dc4-a853-7acc62bc989b","subtype":"Chart","type":"Plot"}},"id":"b2bba41f-61e7-4016-ba88-4dac33c1b702","type":"SaveTool"},{"attributes":{"plot":null,"text":"line"},"id":"d0edcbcc-a8f8-402a-94da-c6ca3636f349","type":"Title"},{"attributes":{"data_source":{"id":"455bc090-8217-4b35-a8d7-9ebb35fd39b7","type":"ColumnDataSource"},"glyph":{"id":"06e144da-c0b4-46d7-8ac7-2bb0b9e9ed74","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"2711e25f-78c1-4eb1-ad42-d93cf34b15ea","type":"GlyphRenderer"},{"attributes":{},"id":"0e562f65-1667-4165-a6c3-842315294067","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"125cff87-f756-47b6-9ced-0a9a23a1a7b2","type":"Line"}],"root_ids":["b39df9ba-263c-4dc4-a853-7acc62bc989b"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ceb38e72-b038-4829-a466-f7bebb3bb930","elementid":"d8de5a11-0e58-49b0-8796-f92b65ce3fdd","modelid":"b39df9ba-263c-4dc4-a853-7acc62bc989b"}];
                
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
