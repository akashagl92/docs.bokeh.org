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
      };var element = document.getElementById("f284745a-43e9-4688-9e6a-59caf6172c4f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f284745a-43e9-4688-9e6a-59caf6172c4f' but no matching script tag was found. ")
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
                  var docs_json = {"4102569c-0b9a-4383-a4f0-8cacac488cce":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"de165d3c-3a73-4988-9ac3-7ef0b1bd9071","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8327c50b-880e-49ae-a389-89fdec21ebb7","type":"Circle"},{"attributes":{"formatter":{"id":"eaafea65-7886-4718-a6b7-4fc2bb3c39d7","type":"BasicTickFormatter"},"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"4085286d-8923-4c85-9238-b13c36491826","type":"BasicTicker"}},"id":"7e337f06-79a4-40f8-b925-38e1005fbc64","type":"LinearAxis"},{"attributes":{"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"}},"id":"ce4b6ac9-4fbb-43e6-bda6-1ab7c05311e4","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"300f345e-d3d6-47d7-93da-70b3b95f7a62","type":"BasicTicker"}},"id":"e684d990-7ce8-4692-a759-fac909b315f7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"4085286d-8923-4c85-9238-b13c36491826","type":"BasicTicker"}},"id":"dee66087-7d51-4437-9117-7e1bee0de1bd","type":"Grid"},{"attributes":{"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"}},"id":"686cbe93-9c02-4f7e-bc35-c7b9aeac4bff","type":"PanTool"},{"attributes":{"callback":null},"id":"b6b13171-f496-4bcf-975d-c9bde3696cf6","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"686cbe93-9c02-4f7e-bc35-c7b9aeac4bff","type":"PanTool"},{"id":"ce4b6ac9-4fbb-43e6-bda6-1ab7c05311e4","type":"WheelZoomTool"},{"id":"518394ad-4b68-43dc-83e3-408326467e76","type":"BoxZoomTool"},{"id":"420edcc8-142c-4177-8658-e5c870c6a2d2","type":"SaveTool"},{"id":"b115e19b-a979-40fe-b138-6e0575b29bc4","type":"ResetTool"},{"id":"e283e383-af4c-47a6-9d5f-1b363c607aeb","type":"HelpTool"}]},"id":"15e277c2-af8d-45be-9bea-849f95360e63","type":"Toolbar"},{"attributes":{"overlay":{"id":"765726f9-84cd-4a6f-9591-79e14f1ceb35","type":"BoxAnnotation"},"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"}},"id":"518394ad-4b68-43dc-83e3-408326467e76","type":"BoxZoomTool"},{"attributes":{},"id":"4085286d-8923-4c85-9238-b13c36491826","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7b9e962e-08b2-4694-abbd-848d1c15d72d","type":"BasicTickFormatter"},"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"300f345e-d3d6-47d7-93da-70b3b95f7a62","type":"BasicTicker"}},"id":"c2a559d6-17ca-4a1a-8943-504833da7b1d","type":"LinearAxis"},{"attributes":{"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"}},"id":"420edcc8-142c-4177-8658-e5c870c6a2d2","type":"SaveTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"7d4f0294-ae6a-4f8b-bac9-eed9d800ed15","type":"Title"},{"attributes":{"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"}},"id":"b115e19b-a979-40fe-b138-6e0575b29bc4","type":"ResetTool"},{"attributes":{"plot":{"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"}},"id":"e283e383-af4c-47a6-9d5f-1b363c607aeb","type":"HelpTool"},{"attributes":{"data_source":{"id":"ac82e7d0-1756-476b-aeb7-78c7fce1bade","type":"ColumnDataSource"},"glyph":{"id":"de165d3c-3a73-4988-9ac3-7ef0b1bd9071","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8327c50b-880e-49ae-a389-89fdec21ebb7","type":"Circle"},"selection_glyph":null},"id":"c540bf89-be2a-49ed-bf16-2ba11502fed3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"ac82e7d0-1756-476b-aeb7-78c7fce1bade","type":"ColumnDataSource"},{"attributes":{},"id":"14869a28-9db6-4180-af0f-d3dc551eb885","type":"ToolEvents"},{"attributes":{"below":[{"id":"c2a559d6-17ca-4a1a-8943-504833da7b1d","type":"LinearAxis"}],"left":[{"id":"7e337f06-79a4-40f8-b925-38e1005fbc64","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c2a559d6-17ca-4a1a-8943-504833da7b1d","type":"LinearAxis"},{"id":"e684d990-7ce8-4692-a759-fac909b315f7","type":"Grid"},{"id":"7e337f06-79a4-40f8-b925-38e1005fbc64","type":"LinearAxis"},{"id":"dee66087-7d51-4437-9117-7e1bee0de1bd","type":"Grid"},{"id":"765726f9-84cd-4a6f-9591-79e14f1ceb35","type":"BoxAnnotation"},{"id":"c540bf89-be2a-49ed-bf16-2ba11502fed3","type":"GlyphRenderer"}],"title":{"id":"7d4f0294-ae6a-4f8b-bac9-eed9d800ed15","type":"Title"},"title_location":"left","tool_events":{"id":"14869a28-9db6-4180-af0f-d3dc551eb885","type":"ToolEvents"},"toolbar":{"id":"15e277c2-af8d-45be-9bea-849f95360e63","type":"Toolbar"},"x_range":{"id":"28ce1d23-e97c-497c-8f0d-df45c894f517","type":"DataRange1d"},"y_range":{"id":"b6b13171-f496-4bcf-975d-c9bde3696cf6","type":"DataRange1d"}},"id":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"765726f9-84cd-4a6f-9591-79e14f1ceb35","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28ce1d23-e97c-497c-8f0d-df45c894f517","type":"DataRange1d"},{"attributes":{},"id":"eaafea65-7886-4718-a6b7-4fc2bb3c39d7","type":"BasicTickFormatter"},{"attributes":{},"id":"300f345e-d3d6-47d7-93da-70b3b95f7a62","type":"BasicTicker"},{"attributes":{},"id":"7b9e962e-08b2-4694-abbd-848d1c15d72d","type":"BasicTickFormatter"}],"root_ids":["bd2e3bc8-818e-4749-9665-1f7af3c91aaf"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"4102569c-0b9a-4383-a4f0-8cacac488cce","elementid":"f284745a-43e9-4688-9e6a-59caf6172c4f","modelid":"bd2e3bc8-818e-4749-9665-1f7af3c91aaf"}];
                  
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