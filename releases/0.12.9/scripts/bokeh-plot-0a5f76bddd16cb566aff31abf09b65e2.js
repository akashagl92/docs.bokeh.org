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
      };var element = document.getElementById("40f8a65a-7aca-4baa-86c8-b11a2b1d51e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '40f8a65a-7aca-4baa-86c8-b11a2b1d51e3' but no matching script tag was found. ")
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
                    var docs_json = {"3eb71394-2c7a-47d7-9fc5-1242f43aee7b":{"roots":{"references":[{"attributes":{"formatter":{"id":"fc413cf1-f20c-4d82-a4df-c2b2cff14a3c","type":"BasicTickFormatter"},"plot":{"id":"9fa71220-dadc-4cf9-9a08-97198776a961","subtype":"Figure","type":"Plot"},"ticker":{"id":"32b20784-9a9d-4d50-9f7f-afe57dd840f9","type":"BasicTicker"}},"id":"6bd1a6fe-1aaf-427a-bd6e-31e638e33c98","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"99196157-3762-4d1f-84a3-ec9d374e0dc4","type":"Triangle"},{"attributes":{},"id":"19385dbc-73b4-492b-8a6f-8eba53a760e7","type":"SaveTool"},{"attributes":{},"id":"8e327203-ae15-4123-a39c-9ad1fbf6af15","type":"HelpTool"},{"attributes":{"formatter":{"id":"7f85dcda-593a-4ea2-b265-385251e3f4be","type":"BasicTickFormatter"},"plot":{"id":"07aebdec-1a2a-4724-8a3e-1a3c8afdfe8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"510ea386-e5f1-4e35-8c9e-4945c7911038","type":"BasicTicker"}},"id":"72efc6c0-0dee-4a50-b51a-d7150e5cc4eb","type":"LinearAxis"},{"attributes":{},"id":"3cfb805e-9495-43a9-accb-bc1c49592f49","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3063810a-5f9c-46ec-9ac8-61f86662b95e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"0a0c2a89-e647-46fa-a164-5318e794f2ba","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"05e5f13a-abc9-4426-83e3-d5e54428c9e9","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"41cbc222-c213-4c00-8814-26daec331db4","type":"Square"},{"attributes":{},"id":"be1de954-968e-4c54-8d63-67fff5536c3d","type":"LinearScale"},{"attributes":{},"id":"15d1d1f8-2426-41d2-9bf1-bcbdb0daa7e4","type":"LinearScale"},{"attributes":{"below":[{"id":"72efc6c0-0dee-4a50-b51a-d7150e5cc4eb","type":"LinearAxis"}],"left":[{"id":"0b7dd390-8b65-4085-96a7-f2c70d9373c0","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"72efc6c0-0dee-4a50-b51a-d7150e5cc4eb","type":"LinearAxis"},{"id":"be93dc3d-1c17-408d-bc64-52748dd1b633","type":"Grid"},{"id":"0b7dd390-8b65-4085-96a7-f2c70d9373c0","type":"LinearAxis"},{"id":"3c6a4b81-47ec-4634-aaf5-f6c2e767817a","type":"Grid"},{"id":"69be6efb-9be1-4f19-8c80-ad9f0038c9c3","type":"BoxAnnotation"},{"id":"14bc848a-ede9-4a4e-97de-6984ce2c1563","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"09cce496-3969-4258-8d3a-a292b692b0e2","type":"Toolbar"},"x_range":{"id":"b18960df-8921-4661-9fa5-7cb47961c510","type":"DataRange1d"},"x_scale":{"id":"be1de954-968e-4c54-8d63-67fff5536c3d","type":"LinearScale"},"y_range":{"id":"3063810a-5f9c-46ec-9ac8-61f86662b95e","type":"DataRange1d"},"y_scale":{"id":"8cb1b2fa-8d72-4346-bda7-83cdc1ab9b65","type":"LinearScale"}},"id":"07aebdec-1a2a-4724-8a3e-1a3c8afdfe8b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b18960df-8921-4661-9fa5-7cb47961c510","type":"DataRange1d"},{"attributes":{},"id":"8cb1b2fa-8d72-4346-bda7-83cdc1ab9b65","type":"LinearScale"},{"attributes":{"overlay":{"id":"69be6efb-9be1-4f19-8c80-ad9f0038c9c3","type":"BoxAnnotation"}},"id":"ca8e969f-b3b6-4442-8fbd-58401bf7a768","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"07aebdec-1a2a-4724-8a3e-1a3c8afdfe8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"510ea386-e5f1-4e35-8c9e-4945c7911038","type":"BasicTicker"}},"id":"be93dc3d-1c17-408d-bc64-52748dd1b633","type":"Grid"},{"attributes":{},"id":"f853e31f-e1eb-45cf-88d5-f4ca42d25305","type":"LinearScale"},{"attributes":{},"id":"510ea386-e5f1-4e35-8c9e-4945c7911038","type":"BasicTicker"},{"attributes":{"formatter":{"id":"bd2011a1-5711-4a3e-a282-aba07be10018","type":"BasicTickFormatter"},"plot":{"id":"07aebdec-1a2a-4724-8a3e-1a3c8afdfe8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe41c48b-e833-4a0a-b2f8-fbf987244e67","type":"BasicTicker"}},"id":"0b7dd390-8b65-4085-96a7-f2c70d9373c0","type":"LinearAxis"},{"attributes":{},"id":"fc413cf1-f20c-4d82-a4df-c2b2cff14a3c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ff5a6e4a-ae62-4bfe-8155-a059affd4d95","type":"ColumnDataSource"},"glyph":{"id":"05e5f13a-abc9-4426-83e3-d5e54428c9e9","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99196157-3762-4d1f-84a3-ec9d374e0dc4","type":"Triangle"},"selection_glyph":null,"view":{"id":"91301c3f-9317-4e80-8564-0538813b72e9","type":"CDSView"}},"id":"14bc848a-ede9-4a4e-97de-6984ce2c1563","type":"GlyphRenderer"},{"attributes":{},"id":"6e2bb903-7cde-4929-91c0-1f11ed8dd1ac","type":"PanTool"},{"attributes":{"source":{"id":"ff5a6e4a-ae62-4bfe-8155-a059affd4d95","type":"ColumnDataSource"}},"id":"91301c3f-9317-4e80-8564-0538813b72e9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"ff5a6e4a-ae62-4bfe-8155-a059affd4d95","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"08bab0ef-3418-4c72-98ce-e407e14ff8c5","type":"BoxAnnotation"}},"id":"82b618ce-0c0d-43e2-9136-b2fa51c77d50","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"08bab0ef-3418-4c72-98ce-e407e14ff8c5","type":"BoxAnnotation"},{"attributes":{},"id":"fe41c48b-e833-4a0a-b2f8-fbf987244e67","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"07aebdec-1a2a-4724-8a3e-1a3c8afdfe8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe41c48b-e833-4a0a-b2f8-fbf987244e67","type":"BasicTicker"}},"id":"3c6a4b81-47ec-4634-aaf5-f6c2e767817a","type":"Grid"},{"attributes":{"formatter":{"id":"a5a798b5-6f12-4ffd-959a-1f19a9d7e351","type":"BasicTickFormatter"},"plot":{"id":"f677fc0d-968d-4fb7-ab8c-8a68ceeb16c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1837acde-6b38-4379-8203-1b08bc1090f8","type":"BasicTicker"}},"id":"59043bfa-52ba-46dd-af69-82071a8104db","type":"LinearAxis"},{"attributes":{"callback":null},"id":"fd42c000-5e7a-44fa-aa65-07f7636a5555","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"322f7d59-181f-4180-b1f0-3221d2c53e46","type":"BoxAnnotation"},{"attributes":{},"id":"c91cb0a8-54b7-4633-b8b3-e6c82d812858","type":"BasicTicker"},{"attributes":{"below":[{"id":"e212f06b-1b92-4ba4-8a0f-b017bec2cdea","type":"LinearAxis"}],"left":[{"id":"6bd1a6fe-1aaf-427a-bd6e-31e638e33c98","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e212f06b-1b92-4ba4-8a0f-b017bec2cdea","type":"LinearAxis"},{"id":"bbbcd9c5-9064-4f39-aaca-758d9b73aa2c","type":"Grid"},{"id":"6bd1a6fe-1aaf-427a-bd6e-31e638e33c98","type":"LinearAxis"},{"id":"ced22a78-b062-49f8-b40f-906a004a8be0","type":"Grid"},{"id":"08bab0ef-3418-4c72-98ce-e407e14ff8c5","type":"BoxAnnotation"},{"id":"0e747618-b97b-4698-b89a-26f60cb66c07","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b175b9cc-e824-44ba-8235-d2c6451f1700","type":"Toolbar"},"x_range":{"id":"fd42c000-5e7a-44fa-aa65-07f7636a5555","type":"DataRange1d"},"x_scale":{"id":"f853e31f-e1eb-45cf-88d5-f4ca42d25305","type":"LinearScale"},"y_range":{"id":"2b5072c1-8dc1-4988-b661-50c2fe0bc8e8","type":"DataRange1d"},"y_scale":{"id":"15d1d1f8-2426-41d2-9bf1-bcbdb0daa7e4","type":"LinearScale"}},"id":"9fa71220-dadc-4cf9-9a08-97198776a961","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"7f8ece50-8a2b-4a59-9b28-2fa80606dcc7","type":"ColumnDataSource"}},"id":"dd040f79-d4f8-4fa4-bdfa-f0502cb3c950","type":"CDSView"},{"attributes":{},"id":"4ff0828e-ad7b-4143-9006-bdcb254dbf0f","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6e2bb903-7cde-4929-91c0-1f11ed8dd1ac","type":"PanTool"},{"id":"e1d2e818-201e-4774-af19-4eefd035f2cf","type":"WheelZoomTool"},{"id":"ca8e969f-b3b6-4442-8fbd-58401bf7a768","type":"BoxZoomTool"},{"id":"43889b2d-4db1-4ab3-ad18-0f7f56a3c28e","type":"SaveTool"},{"id":"08a1ac6a-cb65-40f2-a55b-f55a186a0ed0","type":"ResetTool"},{"id":"8e327203-ae15-4123-a39c-9ad1fbf6af15","type":"HelpTool"}]},"id":"09cce496-3969-4258-8d3a-a292b692b0e2","type":"Toolbar"},{"attributes":{"formatter":{"id":"ee26823c-d657-42ad-8712-4d770e4e6747","type":"BasicTickFormatter"},"plot":{"id":"9fa71220-dadc-4cf9-9a08-97198776a961","subtype":"Figure","type":"Plot"},"ticker":{"id":"c91cb0a8-54b7-4633-b8b3-e6c82d812858","type":"BasicTicker"}},"id":"e212f06b-1b92-4ba4-8a0f-b017bec2cdea","type":"LinearAxis"},{"attributes":{"children":[{"id":"f677fc0d-968d-4fb7-ab8c-8a68ceeb16c8","subtype":"Figure","type":"Plot"},{"id":"07aebdec-1a2a-4724-8a3e-1a3c8afdfe8b","subtype":"Figure","type":"Plot"},{"id":"9fa71220-dadc-4cf9-9a08-97198776a961","subtype":"Figure","type":"Plot"}]},"id":"e59c6d55-ee08-4428-b0d1-53b6dc338282","type":"Column"},{"attributes":{},"id":"7f85dcda-593a-4ea2-b265-385251e3f4be","type":"BasicTickFormatter"},{"attributes":{},"id":"b99867ae-e6dd-443e-85f7-770b60269958","type":"WheelZoomTool"},{"attributes":{},"id":"a5a798b5-6f12-4ffd-959a-1f19a9d7e351","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"0a0c2a89-e647-46fa-a164-5318e794f2ba","type":"ColumnDataSource"}},"id":"91bb8b37-7696-41ae-b4a8-9133b727ba8a","type":"CDSView"},{"attributes":{"below":[{"id":"08dd5e84-2144-4890-84ab-81d423316da4","type":"LinearAxis"}],"left":[{"id":"59043bfa-52ba-46dd-af69-82071a8104db","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"08dd5e84-2144-4890-84ab-81d423316da4","type":"LinearAxis"},{"id":"cb7d4875-d08e-4f6a-94e6-748fba650622","type":"Grid"},{"id":"59043bfa-52ba-46dd-af69-82071a8104db","type":"LinearAxis"},{"id":"2e34a8bd-6544-4483-90b1-d11724bea2b2","type":"Grid"},{"id":"322f7d59-181f-4180-b1f0-3221d2c53e46","type":"BoxAnnotation"},{"id":"1d470696-7363-4def-8258-6096ebb4b1b2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"a1e1464e-c506-46a5-ae05-01b8649a4ec1","type":"Toolbar"},"x_range":{"id":"88da91aa-7ae4-4744-8321-64f8c0eea736","type":"DataRange1d"},"x_scale":{"id":"2e79e159-db0a-434f-94ac-e2ed46d8164d","type":"LinearScale"},"y_range":{"id":"ca992ead-f931-4670-8f07-9934c5ac223e","type":"DataRange1d"},"y_scale":{"id":"23a728a1-53bf-4fb4-b5c0-0a057bc0d1cb","type":"LinearScale"}},"id":"f677fc0d-968d-4fb7-ab8c-8a68ceeb16c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a7584f30-b0c0-48b9-85fc-94229f9ffe40","type":"ResetTool"},{"attributes":{"overlay":{"id":"322f7d59-181f-4180-b1f0-3221d2c53e46","type":"BoxAnnotation"}},"id":"9b4b86c4-1887-45a1-b079-2b08843a5942","type":"BoxZoomTool"},{"attributes":{},"id":"2e9558e3-f4ea-459b-a5ca-92e9400c707c","type":"ResetTool"},{"attributes":{},"id":"0fde0548-bb71-4267-8d49-c5b4933fee13","type":"HelpTool"},{"attributes":{"plot":{"id":"f677fc0d-968d-4fb7-ab8c-8a68ceeb16c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f836a2a-5284-49d5-b6e1-41d3dd278f68","type":"BasicTicker"}},"id":"cb7d4875-d08e-4f6a-94e6-748fba650622","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"7f8ece50-8a2b-4a59-9b28-2fa80606dcc7","type":"ColumnDataSource"},{"attributes":{},"id":"23a728a1-53bf-4fb4-b5c0-0a057bc0d1cb","type":"LinearScale"},{"attributes":{},"id":"1837acde-6b38-4379-8203-1b08bc1090f8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7f8ece50-8a2b-4a59-9b28-2fa80606dcc7","type":"ColumnDataSource"},"glyph":{"id":"74b8bc12-034b-43ed-9aeb-bb351d2d1a5a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0055ff5-f7b1-4fa3-a0b9-a7d62f84147a","type":"Circle"},"selection_glyph":null,"view":{"id":"dd040f79-d4f8-4fa4-bdfa-f0502cb3c950","type":"CDSView"}},"id":"1d470696-7363-4def-8258-6096ebb4b1b2","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3cfb805e-9495-43a9-accb-bc1c49592f49","type":"BasicTickFormatter"},"plot":{"id":"f677fc0d-968d-4fb7-ab8c-8a68ceeb16c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f836a2a-5284-49d5-b6e1-41d3dd278f68","type":"BasicTicker"}},"id":"08dd5e84-2144-4890-84ab-81d423316da4","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69be6efb-9be1-4f19-8c80-ad9f0038c9c3","type":"BoxAnnotation"},{"attributes":{},"id":"7f836a2a-5284-49d5-b6e1-41d3dd278f68","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"74b8bc12-034b-43ed-9aeb-bb351d2d1a5a","type":"Circle"},{"attributes":{},"id":"32b20784-9a9d-4d50-9f7f-afe57dd840f9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f677fc0d-968d-4fb7-ab8c-8a68ceeb16c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1837acde-6b38-4379-8203-1b08bc1090f8","type":"BasicTicker"}},"id":"2e34a8bd-6544-4483-90b1-d11724bea2b2","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ff0828e-ad7b-4143-9006-bdcb254dbf0f","type":"PanTool"},{"id":"b99867ae-e6dd-443e-85f7-770b60269958","type":"WheelZoomTool"},{"id":"9b4b86c4-1887-45a1-b079-2b08843a5942","type":"BoxZoomTool"},{"id":"19385dbc-73b4-492b-8a6f-8eba53a760e7","type":"SaveTool"},{"id":"a7584f30-b0c0-48b9-85fc-94229f9ffe40","type":"ResetTool"},{"id":"0fde0548-bb71-4267-8d49-c5b4933fee13","type":"HelpTool"}]},"id":"a1e1464e-c506-46a5-ae05-01b8649a4ec1","type":"Toolbar"},{"attributes":{"data_source":{"id":"0a0c2a89-e647-46fa-a164-5318e794f2ba","type":"ColumnDataSource"},"glyph":{"id":"41cbc222-c213-4c00-8814-26daec331db4","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e610076c-b81c-4e7b-adf5-bce40c6481e7","type":"Square"},"selection_glyph":null,"view":{"id":"91bb8b37-7696-41ae-b4a8-9133b727ba8a","type":"CDSView"}},"id":"0e747618-b97b-4698-b89a-26f60cb66c07","type":"GlyphRenderer"},{"attributes":{},"id":"2e79e159-db0a-434f-94ac-e2ed46d8164d","type":"LinearScale"},{"attributes":{},"id":"96d73e73-3b19-4ba0-b95a-34944fa6b117","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9fa71220-dadc-4cf9-9a08-97198776a961","subtype":"Figure","type":"Plot"},"ticker":{"id":"c91cb0a8-54b7-4633-b8b3-e6c82d812858","type":"BasicTicker"}},"id":"bbbcd9c5-9064-4f39-aaca-758d9b73aa2c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0055ff5-f7b1-4fa3-a0b9-a7d62f84147a","type":"Circle"},{"attributes":{"callback":null},"id":"ca992ead-f931-4670-8f07-9934c5ac223e","type":"DataRange1d"},{"attributes":{},"id":"bd2011a1-5711-4a3e-a282-aba07be10018","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"88da91aa-7ae4-4744-8321-64f8c0eea736","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e610076c-b81c-4e7b-adf5-bce40c6481e7","type":"Square"},{"attributes":{},"id":"d29a9d99-f96a-416e-8e85-bffd8f796365","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d29a9d99-f96a-416e-8e85-bffd8f796365","type":"PanTool"},{"id":"96d73e73-3b19-4ba0-b95a-34944fa6b117","type":"WheelZoomTool"},{"id":"82b618ce-0c0d-43e2-9136-b2fa51c77d50","type":"BoxZoomTool"},{"id":"3dbb9903-f015-45e1-8c03-0c1fcc7f1986","type":"SaveTool"},{"id":"2e9558e3-f4ea-459b-a5ca-92e9400c707c","type":"ResetTool"},{"id":"47120422-0ab1-42d0-a944-b2f2587902d3","type":"HelpTool"}]},"id":"b175b9cc-e824-44ba-8235-d2c6451f1700","type":"Toolbar"},{"attributes":{"callback":null},"id":"2b5072c1-8dc1-4988-b661-50c2fe0bc8e8","type":"DataRange1d"},{"attributes":{},"id":"e1d2e818-201e-4774-af19-4eefd035f2cf","type":"WheelZoomTool"},{"attributes":{},"id":"ee26823c-d657-42ad-8712-4d770e4e6747","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9fa71220-dadc-4cf9-9a08-97198776a961","subtype":"Figure","type":"Plot"},"ticker":{"id":"32b20784-9a9d-4d50-9f7f-afe57dd840f9","type":"BasicTicker"}},"id":"ced22a78-b062-49f8-b40f-906a004a8be0","type":"Grid"},{"attributes":{},"id":"08a1ac6a-cb65-40f2-a55b-f55a186a0ed0","type":"ResetTool"},{"attributes":{},"id":"43889b2d-4db1-4ab3-ad18-0f7f56a3c28e","type":"SaveTool"},{"attributes":{},"id":"3dbb9903-f015-45e1-8c03-0c1fcc7f1986","type":"SaveTool"},{"attributes":{},"id":"47120422-0ab1-42d0-a944-b2f2587902d3","type":"HelpTool"}],"root_ids":["e59c6d55-ee08-4428-b0d1-53b6dc338282"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"3eb71394-2c7a-47d7-9fc5-1242f43aee7b","elementid":"40f8a65a-7aca-4baa-86c8-b11a2b1d51e3","modelid":"e59c6d55-ee08-4428-b0d1-53b6dc338282"}];
                
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
