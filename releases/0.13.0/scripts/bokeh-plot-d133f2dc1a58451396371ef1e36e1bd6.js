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
      };var element = document.getElementById("2ad849d7-2abd-4bd4-b2d5-22f585aef4c9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2ad849d7-2abd-4bd4-b2d5-22f585aef4c9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"b36e022f-8525-48c9-a0bd-0145751fe8ca":{"roots":{"references":[{"attributes":{"level":"underlay","plot":null,"size":10},"id":"09060d39-92d1-4154-9758-a33c14c19b4e","type":"TeeHead"},{"attributes":{},"id":"38e8a0c0-b61e-4b87-9198-7fd73fdd6a74","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"2db1a527-1533-4397-aebc-2fb06eccded0","type":"Selection"},"selection_policy":{"id":"1de09340-dde9-4d6f-89a8-005c08272b79","type":"UnionRenderers"}},"id":"1fd4eadd-373c-4112-84b0-d4beb3862069","type":"ColumnDataSource"},{"attributes":{},"id":"eb2e017a-404c-43ee-967a-371aabe7edf0","type":"Selection"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"8cf589b1-5382-49d8-96af-0b21e52da22a","type":"Circle"},{"attributes":{},"id":"e01e845a-f714-4df9-b47f-9d336cdaaec8","type":"Selection"},{"attributes":{"source":{"id":"5503aa95-e247-4619-8d13-9359c7612d4f","type":"ColumnDataSource"}},"id":"bc7d65ab-f143-4555-99b4-20e645234759","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"06d3ef6c-ecc9-4736-9daa-99a969af2915","type":"Circle"},{"attributes":{},"id":"f1d2b5f7-1596-4a80-917c-10e0ac682e88","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"487aa122-35c6-4914-8f1c-244d5204ecec","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1fd4eadd-373c-4112-84b0-d4beb3862069","type":"ColumnDataSource"},"glyph":{"id":"8cf589b1-5382-49d8-96af-0b21e52da22a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"06d3ef6c-ecc9-4736-9daa-99a969af2915","type":"Circle"},"selection_glyph":null,"view":{"id":"05708533-9967-4d36-8827-05bb8a403bcc","type":"CDSView"}},"id":"de32db77-edf9-4cab-be96-45c56eb39018","type":"GlyphRenderer"},{"attributes":{},"id":"532ecff3-cee6-4103-af9b-ec3c843942a3","type":"Selection"},{"attributes":{},"id":"4760aeef-90de-4bd1-a1a2-1ab266150370","type":"HelpTool"},{"attributes":{"source":{"id":"1fd4eadd-373c-4112-84b0-d4beb3862069","type":"ColumnDataSource"}},"id":"05708533-9967-4d36-8827-05bb8a403bcc","type":"CDSView"},{"attributes":{},"id":"b07adf4e-da44-4421-b634-033a80f5eedb","type":"UnionRenderers"},{"attributes":{},"id":"8cb0b931-7842-427b-87c9-7df7649f63ad","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"532ecff3-cee6-4103-af9b-ec3c843942a3","type":"Selection"},"selection_policy":{"id":"b07adf4e-da44-4421-b634-033a80f5eedb","type":"UnionRenderers"}},"id":"f4c65d73-917a-4c23-892f-a5f0cb73a30a","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"4169df6f-dce7-4dc1-aad6-b9742c36d099","type":"Selection"},"selection_policy":{"id":"4796c1b8-4dfd-472f-bc66-f5b3571d5ba4","type":"UnionRenderers"}},"id":"cadf9f92-667b-4dd6-8b81-46c8fb755b8d","type":"ColumnDataSource"},{"attributes":{},"id":"282b94d0-deed-40ab-83f1-67a0ae67312c","type":"UnionRenderers"},{"attributes":{},"id":"2db1a527-1533-4397-aebc-2fb06eccded0","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"e01e845a-f714-4df9-b47f-9d336cdaaec8","type":"Selection"},"selection_policy":{"id":"f1d2b5f7-1596-4a80-917c-10e0ac682e88","type":"UnionRenderers"}},"id":"6946191c-58c9-47c9-9981-3b48cca0ad2a","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"d7de8abb-c14d-4dd9-816c-a8207efcafce","type":"Circle"},{"attributes":{},"id":"1de09340-dde9-4d6f-89a8-005c08272b79","type":"UnionRenderers"},{"attributes":{"source":{"id":"6946191c-58c9-47c9-9981-3b48cca0ad2a","type":"ColumnDataSource"}},"id":"67cf1513-5274-46e4-8c6c-92c25f173522","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"a56c6776-853d-43a9-a26c-c02d0d47ec5c","type":"Circle"},{"attributes":{},"id":"4169df6f-dce7-4dc1-aad6-b9742c36d099","type":"Selection"},{"attributes":{"data_source":{"id":"cadf9f92-667b-4dd6-8b81-46c8fb755b8d","type":"ColumnDataSource"},"glyph":{"id":"d7de8abb-c14d-4dd9-816c-a8207efcafce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a56c6776-853d-43a9-a26c-c02d0d47ec5c","type":"Circle"},"selection_glyph":null,"view":{"id":"f5407502-1b38-45f3-954d-9753204d5754","type":"CDSView"}},"id":"8cb881be-8282-4bd3-9dcb-90d19d3d44a9","type":"GlyphRenderer"},{"attributes":{},"id":"4796c1b8-4dfd-472f-bc66-f5b3571d5ba4","type":"UnionRenderers"},{"attributes":{"source":{"id":"cadf9f92-667b-4dd6-8b81-46c8fb755b8d","type":"ColumnDataSource"}},"id":"f5407502-1b38-45f3-954d-9753204d5754","type":"CDSView"},{"attributes":{},"id":"0ecff95e-4216-4f1f-afa0-1a7a78b13eb7","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"eea7e747-2767-4da9-85ce-768e6d06ba69","type":"Circle"},{"attributes":{},"id":"78dfc49c-79d3-4a41-b3fb-8fcda7012b02","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"0ecff95e-4216-4f1f-afa0-1a7a78b13eb7","type":"Selection"},"selection_policy":{"id":"78dfc49c-79d3-4a41-b3fb-8fcda7012b02","type":"UnionRenderers"}},"id":"7140acb3-fcb0-4e9d-98d2-6fa8a94d910f","type":"ColumnDataSource"},{"attributes":{},"id":"f0273df0-b2f6-4f13-833c-70b8c2899d07","type":"Selection"},{"attributes":{},"id":"235773f0-5901-4b31-a660-6de131f77625","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"ad40ebc6-66ce-4df0-b78a-ec1b3bb4eca2","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"a20b81e9-eee5-497e-80f8-cc1c0b9b4e23","type":"Circle"},{"attributes":{},"id":"32d6f566-eb77-4ce5-b608-b0d8666d234b","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"e6b6f250-106d-46de-be0e-4e3cfb8bfabc","type":"Circle"},{"attributes":{},"id":"a83f5559-2355-4140-9926-93e35092c971","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"7140acb3-fcb0-4e9d-98d2-6fa8a94d910f","type":"ColumnDataSource"},"glyph":{"id":"a20b81e9-eee5-497e-80f8-cc1c0b9b4e23","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6b6f250-106d-46de-be0e-4e3cfb8bfabc","type":"Circle"},"selection_glyph":null,"view":{"id":"0b7098e7-df3d-4339-a7cf-a8272a9ca238","type":"CDSView"}},"id":"4cb2fa87-572f-4c51-91fd-5007db226712","type":"GlyphRenderer"},{"attributes":{},"id":"50273cbe-12b0-4423-b01b-d5c074608130","type":"Selection"},{"attributes":{"source":{"id":"7140acb3-fcb0-4e9d-98d2-6fa8a94d910f","type":"ColumnDataSource"}},"id":"0b7098e7-df3d-4339-a7cf-a8272a9ca238","type":"CDSView"},{"attributes":{},"id":"a02a0dbd-b2af-4932-ab1e-eac6377018d4","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6946191c-58c9-47c9-9981-3b48cca0ad2a","type":"ColumnDataSource"},"glyph":{"id":"ad40ebc6-66ce-4df0-b78a-ec1b3bb4eca2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eea7e747-2767-4da9-85ce-768e6d06ba69","type":"Circle"},"selection_glyph":null,"view":{"id":"67cf1513-5274-46e4-8c6c-92c25f173522","type":"CDSView"}},"id":"1b899a87-c8df-4eaa-82a4-8825ae823e39","type":"GlyphRenderer"},{"attributes":{},"id":"c010e5fb-0d90-49b9-926b-5570cf7c3596","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"f0273df0-b2f6-4f13-833c-70b8c2899d07","type":"Selection"},"selection_policy":{"id":"235773f0-5901-4b31-a660-6de131f77625","type":"UnionRenderers"}},"id":"f7caad0f-eea3-4222-9459-783ae9f9d48f","type":"ColumnDataSource"},{"attributes":{},"id":"2f1865fe-5a58-4dce-96f8-13948f0550e8","type":"UnionRenderers"},{"attributes":{},"id":"c3249950-7851-4ed1-995a-51e7cd26b265","type":"Selection"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"d3cff521-4bfa-4de4-a545-6bb08b70c777","type":"Circle"},{"attributes":{},"id":"6a8ce1af-9f61-435f-8e50-9dadf3ea3118","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"f1935b56-b11d-452d-a8b0-3bed231585a3","type":"Circle"},{"attributes":{},"id":"eb26f325-1d00-436e-a6d6-6992bc1817d5","type":"Selection"},{"attributes":{"data_source":{"id":"f7caad0f-eea3-4222-9459-783ae9f9d48f","type":"ColumnDataSource"},"glyph":{"id":"d3cff521-4bfa-4de4-a545-6bb08b70c777","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1935b56-b11d-452d-a8b0-3bed231585a3","type":"Circle"},"selection_glyph":null,"view":{"id":"53f6cab0-0552-4c70-ab73-eb197a335c7e","type":"CDSView"}},"id":"cc8204b5-24d4-4126-8e6a-36e1fb4d246b","type":"GlyphRenderer"},{"attributes":{},"id":"c38154ba-3495-4538-b9c9-a5bc4002335a","type":"UnionRenderers"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"d96897dc-3594-48c8-be43-f7327dea0184","type":"TeeHead"},{"attributes":{"source":{"id":"f7caad0f-eea3-4222-9459-783ae9f9d48f","type":"ColumnDataSource"}},"id":"53f6cab0-0552-4c70-ab73-eb197a335c7e","type":"CDSView"},{"attributes":{},"id":"9bbaf850-e7b6-4bf0-b753-89f43d6c72b4","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"32d6f566-eb77-4ce5-b608-b0d8666d234b","type":"Selection"},"selection_policy":{"id":"a83f5559-2355-4140-9926-93e35092c971","type":"UnionRenderers"}},"id":"de2cc3c2-9c70-4f29-be11-68517d2ffb2d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"9f815684-248a-47c8-b7c7-4c01eb657fd4","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"4116c162-c662-4017-b9cd-133c0228cc26","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"3f0052de-5432-4aa5-905d-94d33917c8bc","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"50ff892e-584c-4bb0-a1e2-de84fded1603","type":"Circle"},{"attributes":{"data_source":{"id":"de2cc3c2-9c70-4f29-be11-68517d2ffb2d","type":"ColumnDataSource"},"glyph":{"id":"4116c162-c662-4017-b9cd-133c0228cc26","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f0052de-5432-4aa5-905d-94d33917c8bc","type":"Circle"},"selection_glyph":null,"view":{"id":"0f6447f2-ecbb-4df7-badc-88bf722142ce","type":"CDSView"}},"id":"bc2c2c46-69c6-4a16-b256-a70de857f195","type":"GlyphRenderer"},{"attributes":{"source":{"id":"de2cc3c2-9c70-4f29-be11-68517d2ffb2d","type":"ColumnDataSource"}},"id":"0f6447f2-ecbb-4df7-badc-88bf722142ce","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"50273cbe-12b0-4423-b01b-d5c074608130","type":"Selection"},"selection_policy":{"id":"a02a0dbd-b2af-4932-ab1e-eac6377018d4","type":"UnionRenderers"}},"id":"33b33e24-f2c1-4735-9202-b9323e813f7c","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"6da9aba3-7561-4cfa-94e3-a8fcda42d023","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"170c86eb-5897-4ecb-97ae-2405f7891d7c","type":"Circle"},{"attributes":{"data_source":{"id":"33b33e24-f2c1-4735-9202-b9323e813f7c","type":"ColumnDataSource"},"glyph":{"id":"6da9aba3-7561-4cfa-94e3-a8fcda42d023","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"170c86eb-5897-4ecb-97ae-2405f7891d7c","type":"Circle"},"selection_glyph":null,"view":{"id":"2004f7b7-f17f-4554-b14a-e1772c297236","type":"CDSView"}},"id":"882914b7-d0f9-4f92-9048-a4f4701f2a4d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"33b33e24-f2c1-4735-9202-b9323e813f7c","type":"ColumnDataSource"}},"id":"2004f7b7-f17f-4554-b14a-e1772c297236","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"c010e5fb-0d90-49b9-926b-5570cf7c3596","type":"Selection"},"selection_policy":{"id":"2f1865fe-5a58-4dce-96f8-13948f0550e8","type":"UnionRenderers"}},"id":"d203904b-e56a-4621-bf81-8cad0dcbabad","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"e55372af-7435-4fa5-8bc9-bc5cf3979ca5","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"dc88c7c7-7531-487f-a3eb-d96bd27dfb6a","type":"Circle"},{"attributes":{"below":[{"id":"2027f7e1-d2db-4f37-a870-9e4893ef9761","type":"LinearAxis"}],"left":[{"id":"6b6ac5d3-2427-49d1-8b1c-5158c0c08e07","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"2027f7e1-d2db-4f37-a870-9e4893ef9761","type":"LinearAxis"},{"id":"bb4d405a-0033-4e0a-808c-43c9ac5f9c2b","type":"Grid"},{"id":"6b6ac5d3-2427-49d1-8b1c-5158c0c08e07","type":"LinearAxis"},{"id":"dedcf3b8-36b5-456e-9f6a-fc209038e15f","type":"Grid"},{"id":"487aa122-35c6-4914-8f1c-244d5204ecec","type":"BoxAnnotation"},{"id":"a5bfc964-bfad-4983-a822-b797810f2da6","type":"Whisker"},{"id":"1b899a87-c8df-4eaa-82a4-8825ae823e39","type":"GlyphRenderer"},{"id":"151c5a24-2bcc-4590-a29f-4ddf3d69d973","type":"GlyphRenderer"},{"id":"83e75552-942e-48cf-b80f-c4c03621f383","type":"GlyphRenderer"},{"id":"de32db77-edf9-4cab-be96-45c56eb39018","type":"GlyphRenderer"},{"id":"8cb881be-8282-4bd3-9dcb-90d19d3d44a9","type":"GlyphRenderer"},{"id":"4cb2fa87-572f-4c51-91fd-5007db226712","type":"GlyphRenderer"},{"id":"cc8204b5-24d4-4126-8e6a-36e1fb4d246b","type":"GlyphRenderer"},{"id":"bc2c2c46-69c6-4a16-b256-a70de857f195","type":"GlyphRenderer"},{"id":"882914b7-d0f9-4f92-9048-a4f4701f2a4d","type":"GlyphRenderer"},{"id":"ceb60a55-bed5-4e55-8909-abbb86643cd4","type":"GlyphRenderer"},{"id":"da1df31c-7118-4890-b722-afe1be78049a","type":"GlyphRenderer"},{"id":"e5014449-8d51-4227-b585-1bf02c6bbe4f","type":"GlyphRenderer"},{"id":"378db3b0-0cca-4be1-a508-35ce17790379","type":"GlyphRenderer"}],"title":{"id":"062c848c-7dff-4181-9eb8-dcd6c8177c5b","type":"Title"},"toolbar":{"id":"300b45ca-996a-4ba2-9c66-a070c06b2b6e","type":"Toolbar"},"x_range":{"id":"e7cf9dd2-6a40-4077-9778-72f8c64842d0","type":"DataRange1d"},"x_scale":{"id":"a5b26289-7502-4148-be18-f4ad5f07dfd2","type":"LinearScale"},"y_range":{"id":"8c3efc43-46f0-4e96-a5b0-8350b8eba3ef","type":"DataRange1d"},"y_scale":{"id":"40655ff7-445b-4d8b-9f3c-1473c2347e2e","type":"LinearScale"}},"id":"2d9569d3-7fe0-4988-9062-1c151b1c0be3","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"18851998-12ce-45de-9f1e-dc43b0fba7cf","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"0f5aee33-f4ce-4b46-a889-fdd66f089514","type":"Circle"},{"attributes":{"data_source":{"id":"d203904b-e56a-4621-bf81-8cad0dcbabad","type":"ColumnDataSource"},"glyph":{"id":"e55372af-7435-4fa5-8bc9-bc5cf3979ca5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18851998-12ce-45de-9f1e-dc43b0fba7cf","type":"Circle"},"selection_glyph":null,"view":{"id":"1ea19d70-b6bf-4c00-8d3e-77ce21b72d73","type":"CDSView"}},"id":"ceb60a55-bed5-4e55-8909-abbb86643cd4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d203904b-e56a-4621-bf81-8cad0dcbabad","type":"ColumnDataSource"}},"id":"1ea19d70-b6bf-4c00-8d3e-77ce21b72d73","type":"CDSView"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"062c848c-7dff-4181-9eb8-dcd6c8177c5b","type":"Title"},{"attributes":{"callback":null},"id":"e7cf9dd2-6a40-4077-9778-72f8c64842d0","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"c3249950-7851-4ed1-995a-51e7cd26b265","type":"Selection"},"selection_policy":{"id":"6a8ce1af-9f61-435f-8e50-9dadf3ea3118","type":"UnionRenderers"}},"id":"56457870-62a5-4812-b8ac-ef478adfb7cb","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"8cb0b931-7842-427b-87c9-7df7649f63ad","type":"Selection"},"selection_policy":{"id":"282b94d0-deed-40ab-83f1-67a0ae67312c","type":"UnionRenderers"}},"id":"366b01a2-4382-47d3-8922-1c044fbdcf08","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d817b07b-9b9b-4c2f-a623-1b66cd58e15c","type":"PanTool"},{"id":"d8f281be-d011-4d2f-a461-9c0c83810a51","type":"WheelZoomTool"},{"id":"3c740b03-a81b-4269-a0e3-561015d78758","type":"BoxZoomTool"},{"id":"3906145d-b37e-4271-b078-0a21250e384e","type":"SaveTool"},{"id":"e1c76e77-a287-44e9-ba88-653f6224fc3f","type":"ResetTool"},{"id":"4760aeef-90de-4bd1-a1a2-1ab266150370","type":"HelpTool"}]},"id":"300b45ca-996a-4ba2-9c66-a070c06b2b6e","type":"Toolbar"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"89e343f7-3bb8-451a-8503-e143ec659737","type":"Circle"},{"attributes":{},"id":"a5b26289-7502-4148-be18-f4ad5f07dfd2","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"c2850624-67e2-4f58-9883-d9545d35a2f5","type":"Circle"},{"attributes":{"data_source":{"id":"56457870-62a5-4812-b8ac-ef478adfb7cb","type":"ColumnDataSource"},"glyph":{"id":"89e343f7-3bb8-451a-8503-e143ec659737","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c2850624-67e2-4f58-9883-d9545d35a2f5","type":"Circle"},"selection_glyph":null,"view":{"id":"3b8b6774-3d73-4b8f-b862-4c7723334597","type":"CDSView"}},"id":"da1df31c-7118-4890-b722-afe1be78049a","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8c3efc43-46f0-4e96-a5b0-8350b8eba3ef","type":"DataRange1d"},{"attributes":{"source":{"id":"56457870-62a5-4812-b8ac-ef478adfb7cb","type":"ColumnDataSource"}},"id":"3b8b6774-3d73-4b8f-b862-4c7723334597","type":"CDSView"},{"attributes":{},"id":"d817b07b-9b9b-4c2f-a623-1b66cd58e15c","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"2d9569d3-7fe0-4988-9062-1c151b1c0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cf6ab9e-c2ef-4dd0-a3a0-66d3e5806a11","type":"BasicTicker"}},"id":"dedcf3b8-36b5-456e-9f6a-fc209038e15f","type":"Grid"},{"attributes":{},"id":"40655ff7-445b-4d8b-9f3c-1473c2347e2e","type":"LinearScale"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"eb26f325-1d00-436e-a6d6-6992bc1817d5","type":"Selection"},"selection_policy":{"id":"c38154ba-3495-4538-b9c9-a5bc4002335a","type":"UnionRenderers"}},"id":"776ba653-2bef-467b-805b-121125520156","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2d9569d3-7fe0-4988-9062-1c151b1c0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2baebb2d-af19-4274-8e94-546f8e088969","type":"BasicTicker"}},"id":"bb4d405a-0033-4e0a-808c-43c9ac5f9c2b","type":"Grid"},{"attributes":{"data_source":{"id":"f4c65d73-917a-4c23-892f-a5f0cb73a30a","type":"ColumnDataSource"},"glyph":{"id":"50ff892e-584c-4bb0-a1e2-de84fded1603","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f5aee33-f4ce-4b46-a889-fdd66f089514","type":"Circle"},"selection_glyph":null,"view":{"id":"4e64e900-0306-47d7-b922-dcd7a2ace82e","type":"CDSView"}},"id":"151c5a24-2bcc-4590-a29f-4ddf3d69d973","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"26d69c29-3b5c-42f9-b79f-7da8f060b01b","type":"BasicTickFormatter"},"plot":{"id":"2d9569d3-7fe0-4988-9062-1c151b1c0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2baebb2d-af19-4274-8e94-546f8e088969","type":"BasicTicker"}},"id":"2027f7e1-d2db-4f37-a870-9e4893ef9761","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"b781299a-3c3c-4388-8a3c-f4afb78d0587","type":"Circle"},{"attributes":{},"id":"2baebb2d-af19-4274-8e94-546f8e088969","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"3fcf4bfe-bc7f-46bc-bb6f-5c09ceb15bff","type":"Circle"},{"attributes":{"data_source":{"id":"776ba653-2bef-467b-805b-121125520156","type":"ColumnDataSource"},"glyph":{"id":"b781299a-3c3c-4388-8a3c-f4afb78d0587","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3fcf4bfe-bc7f-46bc-bb6f-5c09ceb15bff","type":"Circle"},"selection_glyph":null,"view":{"id":"6855d17f-e94a-437b-bc6b-025b5bae5097","type":"CDSView"}},"id":"e5014449-8d51-4227-b585-1bf02c6bbe4f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5548bdb7-a8b6-444b-92df-a2a339311c20","type":"BasicTickFormatter"},"plot":{"id":"2d9569d3-7fe0-4988-9062-1c151b1c0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cf6ab9e-c2ef-4dd0-a3a0-66d3e5806a11","type":"BasicTicker"}},"id":"6b6ac5d3-2427-49d1-8b1c-5158c0c08e07","type":"LinearAxis"},{"attributes":{"source":{"id":"366b01a2-4382-47d3-8922-1c044fbdcf08","type":"ColumnDataSource"}},"id":"b67691b4-2da2-4c05-ac7a-f43c32c36fa6","type":"CDSView"},{"attributes":{},"id":"9cf6ab9e-c2ef-4dd0-a3a0-66d3e5806a11","type":"BasicTicker"},{"attributes":{"source":{"id":"776ba653-2bef-467b-805b-121125520156","type":"ColumnDataSource"}},"id":"6855d17f-e94a-437b-bc6b-025b5bae5097","type":"CDSView"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"eb2e017a-404c-43ee-967a-371aabe7edf0","type":"Selection"},"selection_policy":{"id":"38e8a0c0-b61e-4b87-9198-7fd73fdd6a74","type":"UnionRenderers"}},"id":"ccaa27ed-91ff-41b5-99f7-6a5b736e409d","type":"ColumnDataSource"},{"attributes":{},"id":"e1c76e77-a287-44e9-ba88-653f6224fc3f","type":"ResetTool"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"9bbaf850-e7b6-4bf0-b753-89f43d6c72b4","type":"Selection"},"selection_policy":{"id":"f4314af0-a31a-4548-af84-497a8b192c0e","type":"UnionRenderers"}},"id":"5503aa95-e247-4619-8d13-9359c7612d4f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f4c65d73-917a-4c23-892f-a5f0cb73a30a","type":"ColumnDataSource"}},"id":"4e64e900-0306-47d7-b922-dcd7a2ace82e","type":"CDSView"},{"attributes":{},"id":"d8f281be-d011-4d2f-a461-9c0c83810a51","type":"WheelZoomTool"},{"attributes":{},"id":"5548bdb7-a8b6-444b-92df-a2a339311c20","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"487aa122-35c6-4914-8f1c-244d5204ecec","type":"BoxAnnotation"}},"id":"3c740b03-a81b-4269-a0e3-561015d78758","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"71ff08a8-3b70-4718-bbe0-01286fbf8f21","type":"Circle"},{"attributes":{},"id":"f4314af0-a31a-4548-af84-497a8b192c0e","type":"UnionRenderers"},{"attributes":{},"id":"3906145d-b37e-4271-b078-0a21250e384e","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"87324f12-b945-4e0a-886c-9faea81163c8","type":"Circle"},{"attributes":{"data_source":{"id":"366b01a2-4382-47d3-8922-1c044fbdcf08","type":"ColumnDataSource"},"glyph":{"id":"dc88c7c7-7531-487f-a3eb-d96bd27dfb6a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f815684-248a-47c8-b7c7-4c01eb657fd4","type":"Circle"},"selection_glyph":null,"view":{"id":"b67691b4-2da2-4c05-ac7a-f43c32c36fa6","type":"CDSView"}},"id":"83e75552-942e-48cf-b80f-c4c03621f383","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5503aa95-e247-4619-8d13-9359c7612d4f","type":"ColumnDataSource"},"glyph":{"id":"71ff08a8-3b70-4718-bbe0-01286fbf8f21","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87324f12-b945-4e0a-886c-9faea81163c8","type":"Circle"},"selection_glyph":null,"view":{"id":"bc7d65ab-f143-4555-99b4-20e645234759","type":"CDSView"}},"id":"378db3b0-0cca-4be1-a508-35ce17790379","type":"GlyphRenderer"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"d96897dc-3594-48c8-be43-f7327dea0184","type":"TeeHead"},"plot":{"id":"2d9569d3-7fe0-4988-9062-1c151b1c0be3","subtype":"Figure","type":"Plot"},"source":{"id":"ccaa27ed-91ff-41b5-99f7-6a5b736e409d","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"09060d39-92d1-4154-9758-a33c14c19b4e","type":"TeeHead"}},"id":"a5bfc964-bfad-4983-a822-b797810f2da6","type":"Whisker"},{"attributes":{},"id":"26d69c29-3b5c-42f9-b79f-7da8f060b01b","type":"BasicTickFormatter"}],"root_ids":["2d9569d3-7fe0-4988-9062-1c151b1c0be3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b36e022f-8525-48c9-a0bd-0145751fe8ca","roots":{"2d9569d3-7fe0-4988-9062-1c151b1c0be3":"2ad849d7-2abd-4bd4-b2d5-22f585aef4c9"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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