document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("0bde69fe-6274-4afc-abd6-ba468d85793b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0bde69fe-6274-4afc-abd6-ba468d85793b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"0a126b54-89d6-4d6c-9137-e509c0f41614":{"roots":{"references":[{"attributes":{},"id":"7eb77a92-d7be-457c-89e7-7ad3c56eeb7e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c7f0f8a0-2390-4d60-ae9d-31160debc182","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3e2abfcf-4958-4bc6-9048-2595c39fdaea","type":"Segment"},{"attributes":{"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"}},"id":"829fae72-2cc4-4193-8666-17f9f0fb8d2b","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ce5f688a-8d70-4114-a961-d46200def63e","type":"DataRange1d"},{"attributes":{"below":[{"id":"9a12b51f-df0a-4889-8c2b-bcf3dbb590a4","type":"LinearAxis"}],"left":[{"id":"28958ba6-777a-4760-b2f9-205953a8c209","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9a12b51f-df0a-4889-8c2b-bcf3dbb590a4","type":"LinearAxis"},{"id":"c4fe76b0-b685-4858-921e-d027559b97f2","type":"Grid"},{"id":"28958ba6-777a-4760-b2f9-205953a8c209","type":"LinearAxis"},{"id":"d5227b50-8165-4c10-8be5-9bdd20e30407","type":"Grid"},{"id":"fa37112f-d445-492d-a273-cafb5e58753c","type":"BoxAnnotation"},{"id":"28ab70d3-c486-4791-bd15-de2533469cf5","type":"GlyphRenderer"}],"title":{"id":"c37e6965-95ac-4abb-9d93-fc57ea677106","type":"Title"},"tool_events":{"id":"3828b57f-5152-4b56-a946-df28ae5d12a0","type":"ToolEvents"},"toolbar":{"id":"973f786b-9cfc-467e-a57e-e3401111a72f","type":"Toolbar"},"x_range":{"id":"ce5f688a-8d70-4114-a961-d46200def63e","type":"DataRange1d"},"y_range":{"id":"c7f0f8a0-2390-4d60-ae9d-31160debc182","type":"DataRange1d"}},"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"}},"id":"779c3df6-2dfb-4fe0-9f45-a90f83d5655c","type":"PanTool"},{"attributes":{"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d144855-f34e-40aa-9af0-3f3273555bc7","type":"BasicTicker"}},"id":"c4fe76b0-b685-4858-921e-d027559b97f2","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"779c3df6-2dfb-4fe0-9f45-a90f83d5655c","type":"PanTool"},{"id":"829fae72-2cc4-4193-8666-17f9f0fb8d2b","type":"WheelZoomTool"},{"id":"3ea0265d-188c-4b3e-8b8b-0ac74607ea08","type":"BoxZoomTool"},{"id":"3a0dc88b-c552-49f8-b99c-fc68cad1377b","type":"SaveTool"},{"id":"f798d368-f699-445c-8908-e447ac1b08ee","type":"ResetTool"},{"id":"fb36ee18-44b1-479a-a528-c5b101027812","type":"HelpTool"}]},"id":"973f786b-9cfc-467e-a57e-e3401111a72f","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"c37e6965-95ac-4abb-9d93-fc57ea677106","type":"Title"},{"attributes":{},"id":"6a34ac36-843a-4594-821d-b6b8656c5cbf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"}},"id":"3a0dc88b-c552-49f8-b99c-fc68cad1377b","type":"SaveTool"},{"attributes":{"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"}},"id":"fb36ee18-44b1-479a-a528-c5b101027812","type":"HelpTool"},{"attributes":{"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"}},"id":"f798d368-f699-445c-8908-e447ac1b08ee","type":"ResetTool"},{"attributes":{},"id":"3828b57f-5152-4b56-a946-df28ae5d12a0","type":"ToolEvents"},{"attributes":{},"id":"9d144855-f34e-40aa-9af0-3f3273555bc7","type":"BasicTicker"},{"attributes":{"data_source":{"id":"897874ff-bc8e-428c-aaf8-6efacb2ff13b","type":"ColumnDataSource"},"glyph":{"id":"e0a54b63-3a04-4702-9cf8-64d213d1b10c","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"3e2abfcf-4958-4bc6-9048-2595c39fdaea","type":"Segment"},"selection_glyph":null},"id":"28ab70d3-c486-4791-bd15-de2533469cf5","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6a34ac36-843a-4594-821d-b6b8656c5cbf","type":"BasicTickFormatter"},"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d144855-f34e-40aa-9af0-3f3273555bc7","type":"BasicTicker"}},"id":"9a12b51f-df0a-4889-8c2b-bcf3dbb590a4","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"897874ff-bc8e-428c-aaf8-6efacb2ff13b","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fa37112f-d445-492d-a273-cafb5e58753c","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7eb77a92-d7be-457c-89e7-7ad3c56eeb7e","type":"BasicTickFormatter"},"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc396a33-0194-4648-8a57-6acffeb089ee","type":"BasicTicker"}},"id":"28958ba6-777a-4760-b2f9-205953a8c209","type":"LinearAxis"},{"attributes":{},"id":"bc396a33-0194-4648-8a57-6acffeb089ee","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc396a33-0194-4648-8a57-6acffeb089ee","type":"BasicTicker"}},"id":"d5227b50-8165-4c10-8be5-9bdd20e30407","type":"Grid"},{"attributes":{"overlay":{"id":"fa37112f-d445-492d-a273-cafb5e58753c","type":"BoxAnnotation"},"plot":{"id":"0c280790-b2df-43d2-9f3a-b7de5ac17d46","subtype":"Figure","type":"Plot"}},"id":"3ea0265d-188c-4b3e-8b8b-0ac74607ea08","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e0a54b63-3a04-4702-9cf8-64d213d1b10c","type":"Segment"}],"root_ids":["0c280790-b2df-43d2-9f3a-b7de5ac17d46"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"0a126b54-89d6-4d6c-9137-e509c0f41614","elementid":"0bde69fe-6274-4afc-abd6-ba468d85793b","modelid":"0c280790-b2df-43d2-9f3a-b7de5ac17d46"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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