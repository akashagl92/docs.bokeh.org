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
      };var element = document.getElementById("e92d8738-7d85-4e50-9175-9a44c3c10a44");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e92d8738-7d85-4e50-9175-9a44c3c10a44' but no matching script tag was found. ")
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
                var docs_json = {"6bf96b2c-f494-47a3-86ef-5b0aac9d0af0":{"roots":{"references":[{"attributes":{},"id":"a4dec8b5-cfb2-4202-a02c-1a3752bb8842","type":"BasicTicker"},{"attributes":{"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4dec8b5-cfb2-4202-a02c-1a3752bb8842","type":"BasicTicker"}},"id":"9a0e0a88-10ac-4995-8f46-eeddecafbe0a","type":"Grid"},{"attributes":{"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"}},"id":"707847fb-68fe-4ffb-8384-c6ecb8273a38","type":"HelpTool"},{"attributes":{"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"}},"id":"28e4c081-0523-40ac-beb6-f32fcd10a914","type":"PanTool"},{"attributes":{},"id":"9fc6903d-48ef-46fb-8df1-2bf15b02da8b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0743436c-888e-41bd-aaf7-4d912c61bb6d","type":"ColumnDataSource"},"glyph":{"id":"1209f7b6-1ef0-4cad-9940-ace6b606bc22","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"08e3a4ca-4c91-4ba4-9faf-b920af1a8d6e","type":"Quad"},"selection_glyph":null},"id":"af903f45-da81-421c-9f91-ae9ca6bb0fd5","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"904664a8-bcdc-4d23-84f1-0819482aa78f","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9fc6903d-48ef-46fb-8df1-2bf15b02da8b","type":"BasicTickFormatter"},"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4dec8b5-cfb2-4202-a02c-1a3752bb8842","type":"BasicTicker"}},"id":"b4d36479-cc1e-4004-9af8-2b1de5138feb","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"28e4c081-0523-40ac-beb6-f32fcd10a914","type":"PanTool"},{"id":"cc3a8aaa-1807-4016-ad3f-06866fc7d236","type":"WheelZoomTool"},{"id":"77b74732-14bd-42ad-ae2e-ce1a652d8264","type":"BoxZoomTool"},{"id":"f2ab2bcb-9818-4f79-aa55-7e9cdea2fffa","type":"SaveTool"},{"id":"a0e79593-4e16-4986-95fe-5cb96ea2729d","type":"ResetTool"},{"id":"707847fb-68fe-4ffb-8384-c6ecb8273a38","type":"HelpTool"}]},"id":"12017cf1-73ae-420f-ab28-4db26f025125","type":"Toolbar"},{"attributes":{"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"}},"id":"cc3a8aaa-1807-4016-ad3f-06866fc7d236","type":"WheelZoomTool"},{"attributes":{},"id":"920bcb93-9d37-45bb-b7db-0f1826fb0da9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"b4d36479-cc1e-4004-9af8-2b1de5138feb","type":"LinearAxis"}],"left":[{"id":"04fd347f-1fef-4229-aa65-ab9ed97c400a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b4d36479-cc1e-4004-9af8-2b1de5138feb","type":"LinearAxis"},{"id":"9a0e0a88-10ac-4995-8f46-eeddecafbe0a","type":"Grid"},{"id":"04fd347f-1fef-4229-aa65-ab9ed97c400a","type":"LinearAxis"},{"id":"c2d3ab1e-85f7-484c-badd-9d0f36f9508a","type":"Grid"},{"id":"904664a8-bcdc-4d23-84f1-0819482aa78f","type":"BoxAnnotation"},{"id":"af903f45-da81-421c-9f91-ae9ca6bb0fd5","type":"GlyphRenderer"}],"title":{"id":"8c9ad69f-e9d4-425e-8922-2ca27a4c8cf6","type":"Title"},"tool_events":{"id":"fc5c5309-9071-489e-aa00-eb044e3a2cbd","type":"ToolEvents"},"toolbar":{"id":"12017cf1-73ae-420f-ab28-4db26f025125","type":"Toolbar"},"x_range":{"id":"cc2787ba-9d0b-4adc-bf2f-712f5aa131a6","type":"DataRange1d"},"y_range":{"id":"ee45b29e-b3d5-47fc-8865-4391fa4fb467","type":"DataRange1d"}},"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["top","bottom","right","left"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"0743436c-888e-41bd-aaf7-4d912c61bb6d","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1209f7b6-1ef0-4cad-9940-ace6b606bc22","type":"Quad"},{"attributes":{"plot":null,"text":""},"id":"8c9ad69f-e9d4-425e-8922-2ca27a4c8cf6","type":"Title"},{"attributes":{"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"}},"id":"f2ab2bcb-9818-4f79-aa55-7e9cdea2fffa","type":"SaveTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"08e3a4ca-4c91-4ba4-9faf-b920af1a8d6e","type":"Quad"},{"attributes":{"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"}},"id":"a0e79593-4e16-4986-95fe-5cb96ea2729d","type":"ResetTool"},{"attributes":{"callback":null},"id":"ee45b29e-b3d5-47fc-8865-4391fa4fb467","type":"DataRange1d"},{"attributes":{"formatter":{"id":"920bcb93-9d37-45bb-b7db-0f1826fb0da9","type":"BasicTickFormatter"},"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e216dc1-ec19-460a-8a50-d0b1e439be1b","type":"BasicTicker"}},"id":"04fd347f-1fef-4229-aa65-ab9ed97c400a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e216dc1-ec19-460a-8a50-d0b1e439be1b","type":"BasicTicker"}},"id":"c2d3ab1e-85f7-484c-badd-9d0f36f9508a","type":"Grid"},{"attributes":{},"id":"fc5c5309-9071-489e-aa00-eb044e3a2cbd","type":"ToolEvents"},{"attributes":{"overlay":{"id":"904664a8-bcdc-4d23-84f1-0819482aa78f","type":"BoxAnnotation"},"plot":{"id":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2","subtype":"Figure","type":"Plot"}},"id":"77b74732-14bd-42ad-ae2e-ce1a652d8264","type":"BoxZoomTool"},{"attributes":{},"id":"2e216dc1-ec19-460a-8a50-d0b1e439be1b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"cc2787ba-9d0b-4adc-bf2f-712f5aa131a6","type":"DataRange1d"}],"root_ids":["a23cc5e5-833e-4b34-bdf9-49f9980c78a2"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6bf96b2c-f494-47a3-86ef-5b0aac9d0af0","elementid":"e92d8738-7d85-4e50-9175-9a44c3c10a44","modelid":"a23cc5e5-833e-4b34-bdf9-49f9980c78a2"}];
                
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
