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
      };var element = document.getElementById("2b95f2de-b9b1-496d-9770-633fa4a8c816");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b95f2de-b9b1-496d-9770-633fa4a8c816' but no matching script tag was found. ")
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
                  var docs_json = {"a40c03ca-e5fd-45d6-aeba-bbe8bc36031b":{"roots":{"references":[{"attributes":{},"id":"9e33c7d4-7c30-4ac9-a62b-271c131033f9","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e47d034e-133d-474e-a9cf-4014ba6104b0","type":"ColumnDataSource"},"glyph":{"id":"725ca800-397b-42c0-bb98-a08ab9da082b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d5b4611a-f2cc-4891-ad6d-17a11d2eb845","type":"Circle"},"selection_glyph":null},"id":"18aea290-59c2-49bc-b412-c5879b330062","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"105925a7-3250-45a0-ba79-868dc6940876","type":"PanTool"},{"id":"6b76ff7e-5bb1-461c-9fae-53e81b93b11f","type":"WheelZoomTool"},{"id":"50e1e069-4402-449f-93cf-7dc07b8ac1e4","type":"BoxZoomTool"},{"id":"f7ef1d5f-66b3-423a-828b-fd20daa7012f","type":"SaveTool"},{"id":"6cf59696-2cc8-4cc2-b5b6-82b902e0fa95","type":"ResetTool"},{"id":"77239b94-bd3f-4441-85b8-46cf7847a1c6","type":"HelpTool"}]},"id":"49fa6f5f-53ed-41a0-ac62-e55ea5bc4a53","type":"Toolbar"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"cb0a34e4-9fb5-4df3-bdca-479537cec648","type":"BasicTickFormatter"},"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a2869c5-c82e-4683-8aa8-a14ec5f5efa2","type":"BasicTicker"}},"id":"d46f2524-67f1-4577-94d4-ce6498211714","type":"LinearAxis"},{"attributes":{},"id":"cb0a34e4-9fb5-4df3-bdca-479537cec648","type":"BasicTickFormatter"},{"attributes":{"level":"glyph","plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},"source":{"id":"e47d034e-133d-474e-a9cf-4014ba6104b0","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"e9f57b29-847f-4cbb-946a-c385003c5301","type":"LabelSet"},{"attributes":{},"id":"b8f31632-a9eb-4da6-a5c2-dde764998907","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"}},"id":"6cf59696-2cc8-4cc2-b5b6-82b902e0fa95","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["names","weight","height"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"e47d034e-133d-474e-a9cf-4014ba6104b0","type":"ColumnDataSource"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"b8f31632-a9eb-4da6-a5c2-dde764998907","type":"BasicTickFormatter"},"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2743580-0950-4289-980e-af8fbea589ca","type":"BasicTicker"}},"id":"6a4335a0-1f79-4621-8cfa-687c01750c6a","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"725ca800-397b-42c0-bb98-a08ab9da082b","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a2869c5-c82e-4683-8aa8-a14ec5f5efa2","type":"BasicTicker"}},"id":"d79a1401-6fbe-4dd7-b297-a47161358178","type":"Grid"},{"attributes":{},"id":"4a2869c5-c82e-4683-8aa8-a14ec5f5efa2","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"bb35b17d-717b-42bc-9c6e-2a20b0156d5c","type":"Label"},{"attributes":{"callback":null},"id":"be68c31b-7cfc-4896-bae5-ade9597dd7ac","type":"DataRange1d"},{"attributes":{"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"}},"id":"105925a7-3250-45a0-ba79-868dc6940876","type":"PanTool"},{"attributes":{"callback":null,"end":275,"start":140},"id":"2530f180-414a-42d8-aa82-8343e9e0b264","type":"Range1d"},{"attributes":{"below":[{"id":"6a4335a0-1f79-4621-8cfa-687c01750c6a","type":"LinearAxis"}],"left":[{"id":"d46f2524-67f1-4577-94d4-ce6498211714","type":"LinearAxis"}],"renderers":[{"id":"6a4335a0-1f79-4621-8cfa-687c01750c6a","type":"LinearAxis"},{"id":"39691628-0688-4f96-9ade-7f491cce1af3","type":"Grid"},{"id":"d46f2524-67f1-4577-94d4-ce6498211714","type":"LinearAxis"},{"id":"d79a1401-6fbe-4dd7-b297-a47161358178","type":"Grid"},{"id":"a99705a5-98c3-4972-a571-13da7efd28de","type":"BoxAnnotation"},{"id":"18aea290-59c2-49bc-b412-c5879b330062","type":"GlyphRenderer"},{"id":"e9f57b29-847f-4cbb-946a-c385003c5301","type":"LabelSet"},{"id":"bb35b17d-717b-42bc-9c6e-2a20b0156d5c","type":"Label"}],"title":{"id":"4e7c60ef-691b-498c-90df-b6e46bf4a818","type":"Title"},"tool_events":{"id":"9e33c7d4-7c30-4ac9-a62b-271c131033f9","type":"ToolEvents"},"toolbar":{"id":"49fa6f5f-53ed-41a0-ac62-e55ea5bc4a53","type":"Toolbar"},"x_range":{"id":"2530f180-414a-42d8-aa82-8343e9e0b264","type":"Range1d"},"y_range":{"id":"be68c31b-7cfc-4896-bae5-ade9597dd7ac","type":"DataRange1d"}},"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"d5b4611a-f2cc-4891-ad6d-17a11d2eb845","type":"Circle"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"4e7c60ef-691b-498c-90df-b6e46bf4a818","type":"Title"},{"attributes":{"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"}},"id":"f7ef1d5f-66b3-423a-828b-fd20daa7012f","type":"SaveTool"},{"attributes":{"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2743580-0950-4289-980e-af8fbea589ca","type":"BasicTicker"}},"id":"39691628-0688-4f96-9ade-7f491cce1af3","type":"Grid"},{"attributes":{"overlay":{"id":"a99705a5-98c3-4972-a571-13da7efd28de","type":"BoxAnnotation"},"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"}},"id":"50e1e069-4402-449f-93cf-7dc07b8ac1e4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"}},"id":"6b76ff7e-5bb1-461c-9fae-53e81b93b11f","type":"WheelZoomTool"},{"attributes":{},"id":"e2743580-0950-4289-980e-af8fbea589ca","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a99705a5-98c3-4972-a571-13da7efd28de","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8f9f52cd-08af-4023-9bac-c78784f7a793","subtype":"Figure","type":"Plot"}},"id":"77239b94-bd3f-4441-85b8-46cf7847a1c6","type":"HelpTool"}],"root_ids":["8f9f52cd-08af-4023-9bac-c78784f7a793"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"a40c03ca-e5fd-45d6-aeba-bbe8bc36031b","elementid":"2b95f2de-b9b1-496d-9770-633fa4a8c816","modelid":"8f9f52cd-08af-4023-9bac-c78784f7a793"}];
                  
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