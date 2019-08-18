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
      };var element = document.getElementById("1f24f3fe-9da4-4e27-981a-4e9a58b4e296");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1f24f3fe-9da4-4e27-981a-4e9a58b4e296' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f0a7e69a-3614-4b1e-b82a-84d8eaf83e67":{"roots":{"references":[{"attributes":{"callback":null},"id":"643d57fe-5620-4374-a33f-5003c8ee95a0","type":"DataRange1d"},{"attributes":{"below":[{"id":"d10e0863-43c3-4cb5-a276-8c61af615ebf","type":"LinearAxis"}],"left":[{"id":"fb3af561-f756-4389-859f-2e27b691454e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d10e0863-43c3-4cb5-a276-8c61af615ebf","type":"LinearAxis"},{"id":"a5e38259-16e7-4c48-98a0-955c07a70b53","type":"Grid"},{"id":"fb3af561-f756-4389-859f-2e27b691454e","type":"LinearAxis"},{"id":"73cfd2fe-271d-4932-bf08-3061033684fc","type":"Grid"},{"id":"fb48f204-4741-4706-801d-e47dc8928a11","type":"BoxAnnotation"},{"id":"3b6c468c-0ea4-4aa1-9014-de5c04c95ee6","type":"GlyphRenderer"}],"title":{"id":"7efb55cc-8b76-4e01-8ae0-efd92d9cad48","type":"Title"},"tool_events":{"id":"93183afe-bbab-40ea-b99b-939fd141608d","type":"ToolEvents"},"toolbar":{"id":"9a35b96a-9ac9-4c13-a32d-3d473fe607a6","type":"Toolbar"},"x_range":{"id":"a9562cd1-229e-4e0b-b56c-54e842cefb18","type":"DataRange1d"},"y_range":{"id":"643d57fe-5620-4374-a33f-5003c8ee95a0","type":"DataRange1d"}},"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"93183afe-bbab-40ea-b99b-939fd141608d","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"29030c51-e06e-4444-afdb-8619f0d35205","type":"ColumnDataSource"},{"attributes":{},"id":"b0dbc5e4-4edc-42a7-ac68-96e09319d827","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"}},"id":"3e0768f7-afd5-4c26-ba3a-b0463a1ccb7b","type":"HelpTool"},{"attributes":{"data_source":{"id":"29030c51-e06e-4444-afdb-8619f0d35205","type":"ColumnDataSource"},"glyph":{"id":"3aa129fa-be52-4d39-a11d-c2eec6b11d97","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"b2ec945b-5a6f-4bf3-914f-a8a227c239d4","type":"X"},"selection_glyph":null},"id":"3b6c468c-0ea4-4aa1-9014-de5c04c95ee6","type":"GlyphRenderer"},{"attributes":{},"id":"49dddc19-a73b-41e7-8f5f-1e7c4b39ac81","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2b0de6a5-b4c4-4cf9-854f-8487f5b55ac7","type":"PanTool"},{"id":"288ec379-2669-4515-a6d6-b8668280d2bb","type":"WheelZoomTool"},{"id":"969a5e24-b5c9-4879-9aa1-105c7a482dcf","type":"BoxZoomTool"},{"id":"77941a86-9204-4251-af57-94adae564705","type":"SaveTool"},{"id":"c53a79e6-623e-426c-ba4c-f25158956769","type":"ResetTool"},{"id":"3e0768f7-afd5-4c26-ba3a-b0463a1ccb7b","type":"HelpTool"}]},"id":"9a35b96a-9ac9-4c13-a32d-3d473fe607a6","type":"Toolbar"},{"attributes":{"overlay":{"id":"fb48f204-4741-4706-801d-e47dc8928a11","type":"BoxAnnotation"},"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"}},"id":"969a5e24-b5c9-4879-9aa1-105c7a482dcf","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"}},"id":"77941a86-9204-4251-af57-94adae564705","type":"SaveTool"},{"attributes":{"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"},"ticker":{"id":"12735001-a985-4f67-a6e8-19f71269e6a0","type":"BasicTicker"}},"id":"a5e38259-16e7-4c48-98a0-955c07a70b53","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fb48f204-4741-4706-801d-e47dc8928a11","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"b0dbc5e4-4edc-42a7-ac68-96e09319d827","type":"BasicTickFormatter"},"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"},"ticker":{"id":"49dddc19-a73b-41e7-8f5f-1e7c4b39ac81","type":"BasicTicker"}},"id":"fb3af561-f756-4389-859f-2e27b691454e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"},"ticker":{"id":"49dddc19-a73b-41e7-8f5f-1e7c4b39ac81","type":"BasicTicker"}},"id":"73cfd2fe-271d-4932-bf08-3061033684fc","type":"Grid"},{"attributes":{"formatter":{"id":"10a7234f-091b-4dfe-b3ab-ef92e494115c","type":"BasicTickFormatter"},"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"},"ticker":{"id":"12735001-a985-4f67-a6e8-19f71269e6a0","type":"BasicTicker"}},"id":"d10e0863-43c3-4cb5-a276-8c61af615ebf","type":"LinearAxis"},{"attributes":{"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"}},"id":"2b0de6a5-b4c4-4cf9-854f-8487f5b55ac7","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"7efb55cc-8b76-4e01-8ae0-efd92d9cad48","type":"Title"},{"attributes":{"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"}},"id":"288ec379-2669-4515-a6d6-b8668280d2bb","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3aa129fa-be52-4d39-a11d-c2eec6b11d97","type":"X"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2ec945b-5a6f-4bf3-914f-a8a227c239d4","type":"X"},{"attributes":{},"id":"10a7234f-091b-4dfe-b3ab-ef92e494115c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"181a85f3-d821-4da0-b347-bae2a0a0275d","subtype":"Figure","type":"Plot"}},"id":"c53a79e6-623e-426c-ba4c-f25158956769","type":"ResetTool"},{"attributes":{"callback":null},"id":"a9562cd1-229e-4e0b-b56c-54e842cefb18","type":"DataRange1d"},{"attributes":{},"id":"12735001-a985-4f67-a6e8-19f71269e6a0","type":"BasicTicker"}],"root_ids":["181a85f3-d821-4da0-b347-bae2a0a0275d"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f0a7e69a-3614-4b1e-b82a-84d8eaf83e67","elementid":"1f24f3fe-9da4-4e27-981a-4e9a58b4e296","modelid":"181a85f3-d821-4da0-b347-bae2a0a0275d"}];
              
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