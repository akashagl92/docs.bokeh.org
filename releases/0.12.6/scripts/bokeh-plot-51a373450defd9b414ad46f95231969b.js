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
      };var element = document.getElementById("b3d7fa51-48e8-4a4e-b3bd-a0a68b7b0134");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b3d7fa51-48e8-4a4e-b3bd-a0a68b7b0134' but no matching script tag was found. ")
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
                var docs_json = {"a295e37f-700b-42f6-8778-2fe76480d6ac":{"roots":{"references":[{"attributes":{"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"}},"id":"8c063fd1-3134-4d5e-bd7e-be20199e9490","type":"SaveTool"},{"attributes":{"overlay":{"id":"f5209bf4-4bfc-455f-9655-22d09411c722","type":"BoxAnnotation"},"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"}},"id":"17797428-0762-4403-b393-b5b0c896c397","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2644d7db-5ee6-421e-87e7-4d311eceed20","type":"PanTool"},{"id":"873e69ef-a44d-4bac-9ed2-a3c4ff83c600","type":"WheelZoomTool"},{"id":"17797428-0762-4403-b393-b5b0c896c397","type":"BoxZoomTool"},{"id":"8c063fd1-3134-4d5e-bd7e-be20199e9490","type":"SaveTool"},{"id":"b7c7d471-cbe7-494f-aba4-3f55773e4f6b","type":"ResetTool"},{"id":"c093c743-5d37-47d9-9637-6c327d8c9498","type":"HelpTool"}]},"id":"b6b1ab04-39c5-402e-9efe-607a97da9467","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0864f056-73ab-45bb-99fc-e110a137987e","type":"Ellipse"},{"attributes":{},"id":"d527aff1-8f2c-4d94-ae38-c8be27158056","type":"LinearScale"},{"attributes":{},"id":"7b6271d7-9583-4c33-b1a8-a0329117f625","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"6fd3f321-8b79-4127-8371-a86e5dd2ab79","type":"Title"},{"attributes":{},"id":"8d4e0d60-4db5-4c8b-b736-676ef02a22fc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["width","y","x"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"a14c9a67-b594-4a55-8747-d428e9c8e3ce","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e9b58601-f6ca-4308-ba78-44ab2b62c2e1","type":"BasicTickFormatter"},"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b6271d7-9583-4c33-b1a8-a0329117f625","type":"BasicTicker"}},"id":"52ba5aea-d924-4856-9a62-1325164041a0","type":"LinearAxis"},{"attributes":{},"id":"ca2ead97-59d0-48bc-aa52-06388a1d5cc5","type":"LinearScale"},{"attributes":{"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8f85547-89d6-4571-af07-ffadc279e341","type":"BasicTicker"}},"id":"1db0b53c-e7c3-4061-8cd9-abe369d3d32d","type":"Grid"},{"attributes":{"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"}},"id":"c093c743-5d37-47d9-9637-6c327d8c9498","type":"HelpTool"},{"attributes":{"data_source":{"id":"a14c9a67-b594-4a55-8747-d428e9c8e3ce","type":"ColumnDataSource"},"glyph":{"id":"bf77e334-aad3-4a42-a3ab-ea35f9efb827","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0864f056-73ab-45bb-99fc-e110a137987e","type":"Ellipse"},"selection_glyph":null},"id":"4897c132-1cd0-416a-96a5-15fe4abd2faa","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"cad50aab-8823-41d8-ba86-6f97fab50eb4","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf77e334-aad3-4a42-a3ab-ea35f9efb827","type":"Ellipse"},{"attributes":{"callback":null},"id":"a6c66434-5597-4ec1-a20f-f1e5d638abe0","type":"DataRange1d"},{"attributes":{"below":[{"id":"4db6c11d-1867-48d4-8c4f-10ceae1778b6","type":"LinearAxis"}],"left":[{"id":"52ba5aea-d924-4856-9a62-1325164041a0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4db6c11d-1867-48d4-8c4f-10ceae1778b6","type":"LinearAxis"},{"id":"1db0b53c-e7c3-4061-8cd9-abe369d3d32d","type":"Grid"},{"id":"52ba5aea-d924-4856-9a62-1325164041a0","type":"LinearAxis"},{"id":"c4422c76-712b-47ca-b7e5-19b9bebe9f4e","type":"Grid"},{"id":"f5209bf4-4bfc-455f-9655-22d09411c722","type":"BoxAnnotation"},{"id":"4897c132-1cd0-416a-96a5-15fe4abd2faa","type":"GlyphRenderer"}],"title":{"id":"6fd3f321-8b79-4127-8371-a86e5dd2ab79","type":"Title"},"tool_events":{"id":"2ea34c5e-6119-456c-b630-6737f9765494","type":"ToolEvents"},"toolbar":{"id":"b6b1ab04-39c5-402e-9efe-607a97da9467","type":"Toolbar"},"x_range":{"id":"a6c66434-5597-4ec1-a20f-f1e5d638abe0","type":"DataRange1d"},"x_scale":{"id":"d527aff1-8f2c-4d94-ae38-c8be27158056","type":"LinearScale"},"y_range":{"id":"cad50aab-8823-41d8-ba86-6f97fab50eb4","type":"DataRange1d"},"y_scale":{"id":"ca2ead97-59d0-48bc-aa52-06388a1d5cc5","type":"LinearScale"}},"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b6271d7-9583-4c33-b1a8-a0329117f625","type":"BasicTicker"}},"id":"c4422c76-712b-47ca-b7e5-19b9bebe9f4e","type":"Grid"},{"attributes":{"formatter":{"id":"8d4e0d60-4db5-4c8b-b736-676ef02a22fc","type":"BasicTickFormatter"},"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8f85547-89d6-4571-af07-ffadc279e341","type":"BasicTicker"}},"id":"4db6c11d-1867-48d4-8c4f-10ceae1778b6","type":"LinearAxis"},{"attributes":{"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"}},"id":"b7c7d471-cbe7-494f-aba4-3f55773e4f6b","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f5209bf4-4bfc-455f-9655-22d09411c722","type":"BoxAnnotation"},{"attributes":{},"id":"2ea34c5e-6119-456c-b630-6737f9765494","type":"ToolEvents"},{"attributes":{"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"}},"id":"873e69ef-a44d-4bac-9ed2-a3c4ff83c600","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"fad0cb72-ded8-487c-99fc-3da37149fb38","subtype":"Figure","type":"Plot"}},"id":"2644d7db-5ee6-421e-87e7-4d311eceed20","type":"PanTool"},{"attributes":{},"id":"e8f85547-89d6-4571-af07-ffadc279e341","type":"BasicTicker"},{"attributes":{},"id":"e9b58601-f6ca-4308-ba78-44ab2b62c2e1","type":"BasicTickFormatter"}],"root_ids":["fad0cb72-ded8-487c-99fc-3da37149fb38"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a295e37f-700b-42f6-8778-2fe76480d6ac","elementid":"b3d7fa51-48e8-4a4e-b3bd-a0a68b7b0134","modelid":"fad0cb72-ded8-487c-99fc-3da37149fb38"}];
                
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
