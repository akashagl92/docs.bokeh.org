(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("f6a25753-804b-4188-835e-9dcc5d967bdf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6a25753-804b-4188-835e-9dcc5d967bdf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"69e7aede-873b-4375-8619-95c57f57d8fe":{"roots":{"references":[{"attributes":{},"id":"5d9b83cb-adc8-4b53-9d3e-31176470855b","type":"BasicTickFormatter"},{"attributes":{},"id":"a66f3594-abef-4389-bf09-40027ae658ef","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"68627696-cef2-49b2-834d-d0a311151854","type":"BoxAnnotation"},{"attributes":{"source":{"id":"71fd2c57-a0ab-4c6e-aff4-53776cc3b8e6","type":"ColumnDataSource"}},"id":"5ab426b6-5e55-47ad-a3c5-e66bc3abdbd5","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1e8ed5f0-f4db-4d31-b0c1-8dd07e13dde9","type":"BoxAnnotation"},{"attributes":{},"id":"3ab18b9b-bfdf-4e8c-a23b-47b977bdd7e9","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e08b0253-d019-4c10-b168-07c1da964c6e","type":"Triangle"},{"attributes":{},"id":"b2b52bef-cad9-4b46-bcae-5051b13b6c9f","type":"BasicTicker"},{"attributes":{"plot":{"id":"baea3b6d-691d-408e-bd72-d69f19ee2a79","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2df2727-338d-4bbb-8a8f-164ae1b60960","type":"BasicTicker"}},"id":"5a3f14ce-5328-46f1-9604-8947ff1d4f22","type":"Grid"},{"attributes":{},"id":"f696d94b-d6f1-4d2a-a7e4-4995021d4b2d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"ba7a8972-25ca-42c9-a9d2-cc8cdb9fff66","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"a8320dc7-f927-471f-9b0f-7f6a28af8664","type":"DataRange1d"},{"attributes":{},"id":"06156717-3147-430a-ae65-0be9ff538228","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"5d9b83cb-adc8-4b53-9d3e-31176470855b","type":"BasicTickFormatter"},"plot":{"id":"baea3b6d-691d-408e-bd72-d69f19ee2a79","subtype":"Figure","type":"Plot"},"ticker":{"id":"6524f184-7b3e-4f3b-9273-8e0f656f232b","type":"BasicTicker"}},"id":"10bbdb1d-1d38-44ad-af93-bf0e9a6a71e8","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b63b26f8-784e-48bd-af54-0e9a6d491e0c","type":"BasicTickFormatter"},"plot":{"id":"ca22fac4-a84d-44b2-a321-5ab26577e7f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"402c3c0d-09f6-465c-8fbc-3debee8bee4f","type":"BasicTicker"}},"id":"1bdc6cc4-1467-4662-b0fb-d9025514ccef","type":"LinearAxis"},{"attributes":{},"id":"dcc3c4a7-1507-4071-a5d3-8b4b9da1e90f","type":"HelpTool"},{"attributes":{"below":[{"id":"8ef19167-8fed-45df-a95a-4f80281f3784","type":"LinearAxis"}],"left":[{"id":"0eb41e4a-81c8-4bf9-9273-ee340ab90d9b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8ef19167-8fed-45df-a95a-4f80281f3784","type":"LinearAxis"},{"id":"8594cc5b-4a34-42a6-be71-10e9b07e9012","type":"Grid"},{"id":"0eb41e4a-81c8-4bf9-9273-ee340ab90d9b","type":"LinearAxis"},{"id":"da136b25-b48f-4f81-81d5-a10b3f439884","type":"Grid"},{"id":"68627696-cef2-49b2-834d-d0a311151854","type":"BoxAnnotation"},{"id":"0cc446df-230a-479e-a574-388d13ec92eb","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"c1d9b1d2-5b1f-4644-8f8a-59a7411802ac","type":"Toolbar"},"x_range":{"id":"a8320dc7-f927-471f-9b0f-7f6a28af8664","type":"DataRange1d"},"x_scale":{"id":"451be9ac-7d2b-449c-926d-000f69e8b6de","type":"LinearScale"},"y_range":{"id":"4619c93c-6297-4aae-afd8-ba482196cced","type":"DataRange1d"},"y_scale":{"id":"3d253034-1ace-49ed-ac37-4bc587068d32","type":"LinearScale"}},"id":"2511eb24-8d45-470b-9a25-07bf16d2908a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0262f8b0-6caa-401a-ba3b-197fc614c31b","type":"LinearScale"},{"attributes":{},"id":"77eaef10-b190-471e-b978-8293545262c4","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"401c8d90-cb46-49aa-9562-5969e4f3c6e9","type":"PanTool"},{"id":"1d315a05-fed5-4923-9556-a1ac22c80ebc","type":"WheelZoomTool"},{"id":"932582ae-5e79-4a58-9745-eabf128e46e0","type":"BoxZoomTool"},{"id":"ae8c77e0-4439-4081-a659-708bcdddf0c1","type":"SaveTool"},{"id":"fa1aa7c2-c7e5-48ff-a422-f0449c5d134c","type":"ResetTool"},{"id":"9edaa0ec-1384-4ba9-886a-c148c77d09d1","type":"HelpTool"}]},"id":"f816f984-4130-4782-9988-32dc4577d980","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6395ba59-cb2e-4b1d-b16d-a28a9ca5065f","type":"PanTool"},{"id":"06156717-3147-430a-ae65-0be9ff538228","type":"WheelZoomTool"},{"id":"5214f6b1-8f3c-4eae-b74c-84dc8ba2dd5f","type":"BoxZoomTool"},{"id":"a53563b8-684c-47e3-bdd7-452789e1e8e6","type":"SaveTool"},{"id":"41c0a87f-5768-415a-8db9-ed824f2f50b2","type":"ResetTool"},{"id":"dcc3c4a7-1507-4071-a5d3-8b4b9da1e90f","type":"HelpTool"}]},"id":"ec2a4bb4-fdb7-428d-9137-8f6052cb9902","type":"Toolbar"},{"attributes":{"callback":null},"id":"4619c93c-6297-4aae-afd8-ba482196cced","type":"DataRange1d"},{"attributes":{"below":[{"id":"5152992c-bb59-4f45-af65-55b67e24aece","type":"LinearAxis"}],"left":[{"id":"1bdc6cc4-1467-4662-b0fb-d9025514ccef","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"5152992c-bb59-4f45-af65-55b67e24aece","type":"LinearAxis"},{"id":"baee3cce-d800-491a-9c90-3cd0adcd4361","type":"Grid"},{"id":"1bdc6cc4-1467-4662-b0fb-d9025514ccef","type":"LinearAxis"},{"id":"59f5b4ae-39c5-4017-a2ac-e72c971b6df5","type":"Grid"},{"id":"981c3cd8-fed3-418d-bf74-9d1d867c8fd1","type":"BoxAnnotation"},{"id":"d141f57e-648f-4b93-a606-00f5bbae971f","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f816f984-4130-4782-9988-32dc4577d980","type":"Toolbar"},"x_range":{"id":"a4c5e359-3240-448e-ab80-3ce6b7dace05","type":"DataRange1d"},"x_scale":{"id":"52c159d2-1825-48e3-bdd9-13c1264840e5","type":"LinearScale"},"y_range":{"id":"d571f6d6-cbf3-479f-9667-ef274428a7eb","type":"DataRange1d"},"y_scale":{"id":"3b40225e-3762-452f-8ed1-dc9a956a28ef","type":"LinearScale"}},"id":"ca22fac4-a84d-44b2-a321-5ab26577e7f3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"71fd2c57-a0ab-4c6e-aff4-53776cc3b8e6","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"583b047f-d487-4b11-894a-c83413d77dff","type":"BasicTickFormatter"},"plot":{"id":"baea3b6d-691d-408e-bd72-d69f19ee2a79","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2df2727-338d-4bbb-8a8f-164ae1b60960","type":"BasicTicker"}},"id":"fde4c0a0-4bf9-4110-b1c7-b7b03b46c6c0","type":"LinearAxis"},{"attributes":{"plot":{"id":"ca22fac4-a84d-44b2-a321-5ab26577e7f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b52bef-cad9-4b46-bcae-5051b13b6c9f","type":"BasicTicker"}},"id":"baee3cce-d800-491a-9c90-3cd0adcd4361","type":"Grid"},{"attributes":{"source":{"id":"4132fb51-ecef-472a-9d15-6e923ac9894d","type":"ColumnDataSource"}},"id":"19c7e9c9-a5b8-42a0-a3b4-6ad8568c743b","type":"CDSView"},{"attributes":{"callback":null},"id":"fcbdf526-a2ee-4815-bf83-e6dd3f095987","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"04a966ad-8f39-4986-bf99-7c9b5a153e2a","type":"Square"},{"attributes":{"formatter":{"id":"48323be8-b16c-4a9b-889f-54549986dc0a","type":"BasicTickFormatter"},"plot":{"id":"2511eb24-8d45-470b-9a25-07bf16d2908a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f62eb5bc-9f82-4a02-975d-9e4be87e203b","type":"BasicTicker"}},"id":"8ef19167-8fed-45df-a95a-4f80281f3784","type":"LinearAxis"},{"attributes":{"data_source":{"id":"71fd2c57-a0ab-4c6e-aff4-53776cc3b8e6","type":"ColumnDataSource"},"glyph":{"id":"e08b0253-d019-4c10-b168-07c1da964c6e","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50a0026b-0b22-4817-8122-10add8bad35e","type":"Triangle"},"selection_glyph":null,"view":{"id":"5ab426b6-5e55-47ad-a3c5-e66bc3abdbd5","type":"CDSView"}},"id":"b1157ab3-f2d1-428f-a1e2-f2587e1737ae","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"ca22fac4-a84d-44b2-a321-5ab26577e7f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"402c3c0d-09f6-465c-8fbc-3debee8bee4f","type":"BasicTicker"}},"id":"59f5b4ae-39c5-4017-a2ac-e72c971b6df5","type":"Grid"},{"attributes":{},"id":"6524f184-7b3e-4f3b-9273-8e0f656f232b","type":"BasicTicker"},{"attributes":{},"id":"fa1aa7c2-c7e5-48ff-a422-f0449c5d134c","type":"ResetTool"},{"attributes":{},"id":"583b047f-d487-4b11-894a-c83413d77dff","type":"BasicTickFormatter"},{"attributes":{},"id":"9edaa0ec-1384-4ba9-886a-c148c77d09d1","type":"HelpTool"},{"attributes":{"data_source":{"id":"4132fb51-ecef-472a-9d15-6e923ac9894d","type":"ColumnDataSource"},"glyph":{"id":"04a966ad-8f39-4986-bf99-7c9b5a153e2a","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f2755ad-2c91-4e23-a7cd-bc69f578bf57","type":"Square"},"selection_glyph":null,"view":{"id":"19c7e9c9-a5b8-42a0-a3b4-6ad8568c743b","type":"CDSView"}},"id":"d141f57e-648f-4b93-a606-00f5bbae971f","type":"GlyphRenderer"},{"attributes":{},"id":"a317c690-9035-45a0-b208-c69a60c5f15e","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f2755ad-2c91-4e23-a7cd-bc69f578bf57","type":"Square"},{"attributes":{"source":{"id":"ba7a8972-25ca-42c9-a9d2-cc8cdb9fff66","type":"ColumnDataSource"}},"id":"1e74cc9e-2e0f-4562-9d74-fd310495dddc","type":"CDSView"},{"attributes":{},"id":"475159ba-7b34-4785-bef2-199de31c4c7a","type":"ResetTool"},{"attributes":{"callback":null},"id":"d571f6d6-cbf3-479f-9667-ef274428a7eb","type":"DataRange1d"},{"attributes":{},"id":"6395ba59-cb2e-4b1d-b16d-a28a9ca5065f","type":"PanTool"},{"attributes":{},"id":"451be9ac-7d2b-449c-926d-000f69e8b6de","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"4132fb51-ecef-472a-9d15-6e923ac9894d","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"bcf83679-02c7-4568-8cf9-5004f28e722d","type":"BasicTickFormatter"},"plot":{"id":"ca22fac4-a84d-44b2-a321-5ab26577e7f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b52bef-cad9-4b46-bcae-5051b13b6c9f","type":"BasicTicker"}},"id":"5152992c-bb59-4f45-af65-55b67e24aece","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"23ee1f99-fd71-49fd-8e65-575fce2c98e4","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"50a0026b-0b22-4817-8122-10add8bad35e","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"baea3b6d-691d-408e-bd72-d69f19ee2a79","subtype":"Figure","type":"Plot"},"ticker":{"id":"6524f184-7b3e-4f3b-9273-8e0f656f232b","type":"BasicTicker"}},"id":"e2d4b20d-02e9-421f-9ef7-91ed4ca2013a","type":"Grid"},{"attributes":{},"id":"3b40225e-3762-452f-8ed1-dc9a956a28ef","type":"LinearScale"},{"attributes":{"formatter":{"id":"f696d94b-d6f1-4d2a-a7e4-4995021d4b2d","type":"BasicTickFormatter"},"plot":{"id":"2511eb24-8d45-470b-9a25-07bf16d2908a","subtype":"Figure","type":"Plot"},"ticker":{"id":"87634cb4-3db3-4bf6-839f-327682bcd419","type":"BasicTicker"}},"id":"0eb41e4a-81c8-4bf9-9273-ee340ab90d9b","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a66f3594-abef-4389-bf09-40027ae658ef","type":"PanTool"},{"id":"77eaef10-b190-471e-b978-8293545262c4","type":"WheelZoomTool"},{"id":"20eac2b4-4eeb-41da-8ad9-ca09ae630e15","type":"BoxZoomTool"},{"id":"a317c690-9035-45a0-b208-c69a60c5f15e","type":"SaveTool"},{"id":"475159ba-7b34-4785-bef2-199de31c4c7a","type":"ResetTool"},{"id":"6ccb84fe-7a36-4de5-a8ab-cccba0906a01","type":"HelpTool"}]},"id":"c1d9b1d2-5b1f-4644-8f8a-59a7411802ac","type":"Toolbar"},{"attributes":{},"id":"52c159d2-1825-48e3-bdd9-13c1264840e5","type":"LinearScale"},{"attributes":{"overlay":{"id":"981c3cd8-fed3-418d-bf74-9d1d867c8fd1","type":"BoxAnnotation"}},"id":"932582ae-5e79-4a58-9745-eabf128e46e0","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"981c3cd8-fed3-418d-bf74-9d1d867c8fd1","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a4c5e359-3240-448e-ab80-3ce6b7dace05","type":"DataRange1d"},{"attributes":{},"id":"48323be8-b16c-4a9b-889f-54549986dc0a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2511eb24-8d45-470b-9a25-07bf16d2908a","subtype":"Figure","type":"Plot"},"ticker":{"id":"87634cb4-3db3-4bf6-839f-327682bcd419","type":"BasicTicker"}},"id":"da136b25-b48f-4f81-81d5-a10b3f439884","type":"Grid"},{"attributes":{},"id":"6ccb84fe-7a36-4de5-a8ab-cccba0906a01","type":"HelpTool"},{"attributes":{},"id":"402c3c0d-09f6-465c-8fbc-3debee8bee4f","type":"BasicTicker"},{"attributes":{"plot":{"id":"2511eb24-8d45-470b-9a25-07bf16d2908a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f62eb5bc-9f82-4a02-975d-9e4be87e203b","type":"BasicTicker"}},"id":"8594cc5b-4a34-42a6-be71-10e9b07e9012","type":"Grid"},{"attributes":{},"id":"41c0a87f-5768-415a-8db9-ed824f2f50b2","type":"ResetTool"},{"attributes":{},"id":"3d253034-1ace-49ed-ac37-4bc587068d32","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5899ba95-3658-475c-b590-3aa4f9b27cdc","type":"Circle"},{"attributes":{},"id":"401c8d90-cb46-49aa-9562-5969e4f3c6e9","type":"PanTool"},{"attributes":{"below":[{"id":"fde4c0a0-4bf9-4110-b1c7-b7b03b46c6c0","type":"LinearAxis"}],"left":[{"id":"10bbdb1d-1d38-44ad-af93-bf0e9a6a71e8","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"fde4c0a0-4bf9-4110-b1c7-b7b03b46c6c0","type":"LinearAxis"},{"id":"5a3f14ce-5328-46f1-9604-8947ff1d4f22","type":"Grid"},{"id":"10bbdb1d-1d38-44ad-af93-bf0e9a6a71e8","type":"LinearAxis"},{"id":"e2d4b20d-02e9-421f-9ef7-91ed4ca2013a","type":"Grid"},{"id":"1e8ed5f0-f4db-4d31-b0c1-8dd07e13dde9","type":"BoxAnnotation"},{"id":"b1157ab3-f2d1-428f-a1e2-f2587e1737ae","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"ec2a4bb4-fdb7-428d-9137-8f6052cb9902","type":"Toolbar"},"x_range":{"id":"fcbdf526-a2ee-4815-bf83-e6dd3f095987","type":"DataRange1d"},"x_scale":{"id":"0262f8b0-6caa-401a-ba3b-197fc614c31b","type":"LinearScale"},"y_range":{"id":"b5beab8c-0be5-419f-90a9-9ccb1e544594","type":"DataRange1d"},"y_scale":{"id":"3ab18b9b-bfdf-4e8c-a23b-47b977bdd7e9","type":"LinearScale"}},"id":"baea3b6d-691d-408e-bd72-d69f19ee2a79","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"87634cb4-3db3-4bf6-839f-327682bcd419","type":"BasicTicker"},{"attributes":{},"id":"ae8c77e0-4439-4081-a659-708bcdddf0c1","type":"SaveTool"},{"attributes":{"overlay":{"id":"1e8ed5f0-f4db-4d31-b0c1-8dd07e13dde9","type":"BoxAnnotation"}},"id":"5214f6b1-8f3c-4eae-b74c-84dc8ba2dd5f","type":"BoxZoomTool"},{"attributes":{},"id":"1d315a05-fed5-4923-9556-a1ac22c80ebc","type":"WheelZoomTool"},{"attributes":{},"id":"f62eb5bc-9f82-4a02-975d-9e4be87e203b","type":"BasicTicker"},{"attributes":{},"id":"a53563b8-684c-47e3-bdd7-452789e1e8e6","type":"SaveTool"},{"attributes":{"overlay":{"id":"68627696-cef2-49b2-834d-d0a311151854","type":"BoxAnnotation"}},"id":"20eac2b4-4eeb-41da-8ad9-ca09ae630e15","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"2511eb24-8d45-470b-9a25-07bf16d2908a","subtype":"Figure","type":"Plot"},{"id":"baea3b6d-691d-408e-bd72-d69f19ee2a79","subtype":"Figure","type":"Plot"},{"id":"ca22fac4-a84d-44b2-a321-5ab26577e7f3","subtype":"Figure","type":"Plot"}]},"id":"4b0534bb-b78a-403b-a01c-58c77e59929b","type":"Row"},{"attributes":{"data_source":{"id":"ba7a8972-25ca-42c9-a9d2-cc8cdb9fff66","type":"ColumnDataSource"},"glyph":{"id":"5899ba95-3658-475c-b590-3aa4f9b27cdc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23ee1f99-fd71-49fd-8e65-575fce2c98e4","type":"Circle"},"selection_glyph":null,"view":{"id":"1e74cc9e-2e0f-4562-9d74-fd310495dddc","type":"CDSView"}},"id":"0cc446df-230a-479e-a574-388d13ec92eb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b5beab8c-0be5-419f-90a9-9ccb1e544594","type":"DataRange1d"},{"attributes":{},"id":"b63b26f8-784e-48bd-af54-0e9a6d491e0c","type":"BasicTickFormatter"},{"attributes":{},"id":"bcf83679-02c7-4568-8cf9-5004f28e722d","type":"BasicTickFormatter"},{"attributes":{},"id":"d2df2727-338d-4bbb-8a8f-164ae1b60960","type":"BasicTicker"}],"root_ids":["4b0534bb-b78a-403b-a01c-58c77e59929b"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"69e7aede-873b-4375-8619-95c57f57d8fe","elementid":"f6a25753-804b-4188-835e-9dcc5d967bdf","modelid":"4b0534bb-b78a-403b-a01c-58c77e59929b"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
