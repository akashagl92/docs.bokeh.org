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
      };var element = document.getElementById("9a982a62-a13b-4587-8195-4998b4ecfd97");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a982a62-a13b-4587-8195-4998b4ecfd97' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"62053ad1-bdcb-475f-a3f6-d97f6fcd4fa5":{"roots":{"references":[{"attributes":{"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"5df2cb65-d35f-4daa-a123-372998240c6a","type":"WheelZoomTool"},{"attributes":{},"id":"857be700-e7bd-43d1-8e68-a54fea1de38d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"ce6dc9f3-eadb-4946-9fec-18041ff72200","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"a3afd89c-94a5-4bbb-a42c-167773ffd286","type":"Range1d"},{"attributes":{"legends":[["stamp",[{"id":"bed615d3-f786-485f-8352-bd068883dfef","type":"GlyphRenderer"}]],["postcard",[{"id":"8f994b9b-095e-4641-a47b-536e6370d176","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"69c27b6c-1e4f-4296-a166-61f0e7e2ddc1","type":"Legend"},{"attributes":{"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"22651319-06e1-463b-ba67-03450ffc78a0","type":"PanTool"},{"attributes":{"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"bd49690a-f452-4bdc-b626-6a8dac6a37ec","type":"ResetTool"},{"attributes":{"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"1b6e6041-b2c8-4241-ae42-ae842af37a6c","type":"HelpTool"},{"attributes":{},"id":"ff4ef6bb-fcb2-4ef2-9208-26888b5ca429","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b547044a-a050-4ff1-938c-ca2438d14f84","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"},"ticker":{"id":"84992f55-771c-4920-b310-d4f4f459e65c","type":"BasicTicker"}},"id":"be5f1b4b-42ba-4e30-ba95-67aa5c0b8d15","type":"Grid"},{"attributes":{"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"8ae91582-7ff6-43a4-8b53-a6f5a087d113","type":"SaveTool"},{"attributes":{"data_source":{"id":"01889361-0071-42ca-a6d8-572edf5054cd","type":"ColumnDataSource"},"glyph":{"id":"ddc7dbcd-73f1-43ad-9e23-25363ce21ffb","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8f994b9b-095e-4641-a47b-536e6370d176","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"ff4ef6bb-fcb2-4ef2-9208-26888b5ca429","type":"BasicTickFormatter"},"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"},"ticker":{"id":"f9602c6e-1d2a-4598-9863-34325aaf2426","type":"BasicTicker"}},"id":"ce1e7cc1-93fb-44fd-a255-e24c8cab89ac","type":"LinearAxis"},{"attributes":{"below":[{"id":"d8d34ce1-e88b-4892-9144-8e716a1bf585","type":"LinearAxis"}],"height":400,"left":[{"id":"ce1e7cc1-93fb-44fd-a255-e24c8cab89ac","type":"LinearAxis"}],"renderers":[{"id":"b547044a-a050-4ff1-938c-ca2438d14f84","type":"BoxAnnotation"},{"id":"bed615d3-f786-485f-8352-bd068883dfef","type":"GlyphRenderer"},{"id":"8f994b9b-095e-4641-a47b-536e6370d176","type":"GlyphRenderer"},{"id":"69c27b6c-1e4f-4296-a166-61f0e7e2ddc1","type":"Legend"},{"id":"d8d34ce1-e88b-4892-9144-8e716a1bf585","type":"LinearAxis"},{"id":"ce1e7cc1-93fb-44fd-a255-e24c8cab89ac","type":"LinearAxis"},{"id":"be5f1b4b-42ba-4e30-ba95-67aa5c0b8d15","type":"Grid"},{"id":"b67bd8da-402c-49e0-90e9-fb5da9b3dedd","type":"Grid"}],"title":{"id":"5c06ec5a-ef52-49e0-8127-0662a1ff9533","type":"Title"},"tool_events":{"id":"2eecb7f5-6aaf-42f0-a7e4-b5ea5f86c07e","type":"ToolEvents"},"toolbar":{"id":"1987211d-c0e4-4850-b359-546b778034ef","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"3290d3f8-4059-4902-a18a-959462d9edb1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a3afd89c-94a5-4bbb-a42c-167773ffd286","type":"Range1d"}},"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"2eecb7f5-6aaf-42f0-a7e4-b5ea5f86c07e","type":"ToolEvents"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"3290d3f8-4059-4902-a18a-959462d9edb1","type":"Range1d"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ddc7dbcd-73f1-43ad-9e23-25363ce21ffb","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"},"ticker":{"id":"f9602c6e-1d2a-4598-9863-34325aaf2426","type":"BasicTicker"}},"id":"b67bd8da-402c-49e0-90e9-fb5da9b3dedd","type":"Grid"},{"attributes":{"axis_label":"index","formatter":{"id":"857be700-e7bd-43d1-8e68-a54fea1de38d","type":"BasicTickFormatter"},"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"},"ticker":{"id":"84992f55-771c-4920-b310-d4f4f459e65c","type":"BasicTicker"}},"id":"d8d34ce1-e88b-4892-9144-8e716a1bf585","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"22651319-06e1-463b-ba67-03450ffc78a0","type":"PanTool"},{"id":"5df2cb65-d35f-4daa-a123-372998240c6a","type":"WheelZoomTool"},{"id":"26f4a5f3-7cee-421e-a940-3517a65bc2bd","type":"BoxZoomTool"},{"id":"8ae91582-7ff6-43a4-8b53-a6f5a087d113","type":"SaveTool"},{"id":"bd49690a-f452-4bdc-b626-6a8dac6a37ec","type":"ResetTool"},{"id":"1b6e6041-b2c8-4241-ae42-ae842af37a6c","type":"HelpTool"}]},"id":"1987211d-c0e4-4850-b359-546b778034ef","type":"Toolbar"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"5c06ec5a-ef52-49e0-8127-0662a1ff9533","type":"Title"},{"attributes":{"data_source":{"id":"ce6dc9f3-eadb-4946-9fec-18041ff72200","type":"ColumnDataSource"},"glyph":{"id":"188e9700-1ac5-41a0-80b5-53c6d7fb4e05","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bed615d3-f786-485f-8352-bd068883dfef","type":"GlyphRenderer"},{"attributes":{},"id":"84992f55-771c-4920-b310-d4f4f459e65c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"01889361-0071-42ca-a6d8-572edf5054cd","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"b547044a-a050-4ff1-938c-ca2438d14f84","type":"BoxAnnotation"},"plot":{"id":"012eb009-36de-4fba-ae93-49f3773ba19a","subtype":"Chart","type":"Plot"}},"id":"26f4a5f3-7cee-421e-a940-3517a65bc2bd","type":"BoxZoomTool"},{"attributes":{},"id":"f9602c6e-1d2a-4598-9863-34325aaf2426","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"188e9700-1ac5-41a0-80b5-53c6d7fb4e05","type":"Line"}],"root_ids":["012eb009-36de-4fba-ae93-49f3773ba19a"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"62053ad1-bdcb-475f-a3f6-d97f6fcd4fa5","elementid":"9a982a62-a13b-4587-8195-4998b4ecfd97","modelid":"012eb009-36de-4fba-ae93-49f3773ba19a"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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